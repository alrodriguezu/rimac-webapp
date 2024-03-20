const dotenv = require('dotenv');
const fs = require('fs');

const environmentName = process.argv[2];
const canIgnoreBuildDate = !!process.argv.find(e => e === '--ignore-build-date')


if (environmentName == null) {
  throw new Error(`The script needs the environment name as parameter. Example: env.cjs sandbox`);
}

const envPropertiesPath = `${__dirname}/config/.env.${environmentName}`;
const k8sPropertiesPath = `${__dirname}/config/.env.k8s`;
const publicDir = process.argv[3] || '.';
const indexPath = `${publicDir}/index.html`
const metaJson = `${publicDir}/build.json`

main();

function main(){
  if(canIgnoreBuildDate) process.exit(0);

  const buildVariables = generateBuildVariable();
  createBuildJson(buildVariables);
  const fileVariables = readEnvProperties();
  const k8sVariables = readK8SPropertiesIfExists();
  const mergedVariables = mergeVariables(buildVariables,fileVariables,k8sVariables);
  injectVariablesInIndexHtml(mergedVariables);
  replacePlaceholdersInIndexHtml(mergedVariables);
}

function readEnvProperties(){
  const path = envPropertiesPath;
  if (!fs.existsSync(path)) {
    throw new Error(`Config file ${path} doesn't exists`);
  }
  console.log(`Environment '${environmentName}' file found`);
  const content = fs.readFileSync(path)
  return dotenv.parse(content);
}

function readK8SPropertiesIfExists(){
  const path = k8sPropertiesPath;
  if (fs.existsSync(path)) {
    console.log(`K8S injected file found`);
    const content = fs.readFileSync(path)
    return dotenv.parse(content);
  }
  return {};
}

function generateBuildVariable(){
  return {
    BUILD_DATE: new Date().getTime(),
  };
}

function createBuildJson(jsonData){
  fs.writeFile(metaJson, JSON.stringify(jsonData), "utf8", function (error) {
    if (error) {
      console.log(`An error occured while saving build date and time to ${metaJson}`);
      return console.log(error);
    }

    console.log(`Latest build date and time updated in ${metaJson} file`);
  });
}

function mergeVariables(buildVariable,fileVariables,k8sVariables){
  let mergeVariables = {...buildVariable,...fileVariables, ...k8sVariables};
  return mergeVariables;
}

function injectVariablesInIndexHtml(mergedVariables){
  const envObject = createEnvObject(mergedVariables);
  writeEnvObjectToIndexHtml(envObject);
}

function createEnvObject(mergedVariables){
  const data = "window._env_ = "+JSON.stringify(mergedVariables, null,2)
  const unquotedData = data.replace(/"([^"]+)":/g, '$1:');
  return unquotedData;
}

function writeEnvObjectToIndexHtml(data){
  if (!fs.existsSync(indexPath)) {
    throw new Error(`${indexPath} doesn't exists`);
  }
  const content = fs.readFileSync(indexPath, 'utf8');
  let newContent=replaceContentInsideScriptTag(content,data)
  fs.writeFileSync(indexPath, newContent, 'utf8');
  console.log(`SUCCESS: ${indexPath} script tag replaced`);
}

function replaceContentInsideScriptTag(original, replaceTxt) {
  const regexString = '(<script id="js-bundle-runtime-config">)(.|\n|\r\n)*?(<\/script>)'
  const regex = new RegExp(regexString, 'g');
  return original.replace(regex, `$1\n${replaceTxt}\n\t\t$3`);
}

function replacePlaceholdersInIndexHtml(mergedVariables){
  if (!fs.existsSync(indexPath)) {
    throw new Error(`${indexPath} doesn't exists`);
  }
  const content = fs.readFileSync(indexPath, 'utf8');
  const objKeys = Object.keys(mergedVariables);
  let newContent = content;
  objKeys.forEach(key => {
      let value = mergedVariables[key];
      newContent = replaceGlobally(newContent,`%${key}%`,value);
  });
  fs.writeFileSync(indexPath, newContent, 'utf8');
  console.log(`SUCCESS: ${indexPath} placeholders replaced`);
}

function replaceGlobally(original, searchTxt, replaceTxt) {
  const regex = new RegExp(searchTxt, 'g');
  return original.replace(regex, replaceTxt) ;
}
