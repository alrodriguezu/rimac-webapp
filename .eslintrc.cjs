module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  globals: {
    vi: true,
    React: true,
    google: true,
    mount: true,
    mountWithRouter: true,
    shallow: true,
    shallowWithRouter: true,
    context: true,
    expect: true,
    jsdom: true,
    JSX: true,
    NodeJS: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: [
    'react-refresh',
    'react',
    'react-hooks',
    '@typescript-eslint',
    'prettier',
    'simple-import-sort',
    'import',
  ],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    "import/no-unresolved": "error"
  },
}
