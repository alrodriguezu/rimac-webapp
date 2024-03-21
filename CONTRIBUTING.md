<p align="center">
 <img src="./public/rimac.svg" width="130" />
</p>

# Guía de contribución en el proyecto Rimac

## Tabla de contenido

- [Demo](#demo)
- [Tecnologías](#tecnologías)
- [Pre-requisitos](#pre-requisitos)
- [Variables de entorno](#Variables-de-entorno)
- [Scripts](#scripts)
- [Políticas](#políticas)
- [Pautas de contribución](#pautas-de-contribución)
  - [Branchs](#branchs)
  - [Commits](#commits)
  - [Pull requests](#pull-requests)
- [Scaffolding](#scaffolding)

## Demo

- Ambiente test: https://master--rimac-webapp.netlify.app/

## Tecnologías

El stack tecnológico que tiene el proyecto es el siguiente, sin embargo por debajo se usa otras que puede verse en el código detalladamente:

<table>
<thead>
  <tr>
    <th>Tecnología</th>
    <th>versión</th>
    <th>Link</th>
  </tr>
</thead>
<tbody>
 <tr>
  <td>
  <img src="https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white" />
  </td>
  <td>
   5.1.6
  </td>
  <td>
   <a href="https://vitejs.dev/">https://vitejs.dev/</a>
  </td>
 </tr>
 <tr>
  <td>
  <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" />
  </td>
  <td>
   18.2.0
  </td>
  <td>
   <a href="https://react.dev/">https://react.dev/</a>
  </td>
 </tr>
  <tr>
  <td>
  <img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white"/>
  </td>
  <td>
   6.22.3
  </td>
    <td>
   <a href="https://reactrouter.com/en/main">https://reactrouter.com/en/main</a>
  </td>
 </tr>
  <tr>
  <td>
 <img src="https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white" />
  </td>
  <td>
  5.0.1
  </td>
    <td>
   <a href="https://react-redux.js.org/">https://react-redux.js.org/</a>
  </td>
 </tr>
 <tr>
  <td>
 <img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" />
  </td>
  <td>
   5.2.2
  </td>
    <td>
   <a href="https://www.typescriptlang.org">https://www.typescriptlang.org</a>
  </td>
 </tr>
</tbody>
</table>

## Pre-requisitos

3. Tener instalado la versión de node **`v20.9.0`**
   > ⚠️ En caso de estar usando una versión distinta para otros proyectos, es recomendable instalar [NVM](https://github.com/coreybutler/nvm-windows) para usar distintas versiones.

## Scripts

- Iniciar el proyecto LOCAL

  - Instalación de dependencias `npm install`
  - Levantar en local con `npm run dev`

    ```console
    $ npm run dev
    ```

- Compilar el proyecto

  ```console
  $ npm run build
  ```

- Ejecutar las pruebas unitarias `npm run test`

  ```console
  $ npm run test
  ```

## Políticas

- Siempre ejecutar prettier para el formato del código antes de cada commit.
- Revisar el código en el Pull Request cuidadosamente.
- Ser muy asertivo en los comentarios de los Pull Requests.
- Evitar la complejidad en los métodos.

> ✅ Puedes ver más detalles acerca de la guía de estilos que se sigue en el siguiente Notion [Coding Style Guide.](#)

## Pautas de contribución

### Branchs

- Si es un feature: `feature/[jira-ticket]_[descripción-breve]`
- Si es un issue: `bug/[jira-ticket]_[descripción-breve]`
- Si es un hotfix: `hotfix/[jira-ticket]_[descripción-breve]`
- Si es un refactor: `refactor/[jira-ticket]_[descripción-breve]`

ejemplo:

```console
$ git checkout -b "feature/1293_checkout-payment-types"
```

### Commits

Usar commits más atómicos es decir si trabajo sobre una pantalla o contexto considerarlo en el commit dentro de un parantesis

ejemplo:

```console
$ git commit -am "feat(checkout): added payment types component"
```

### Pull requests

Cuando creemos los PR consideremos el numero de ticket de Jira además del tipo de incidencia que es, tiene la siguiente nomenclatura.

- Si es un feature: `Feature: [jira-ticket] [descripción-breve]`
- Si es un issue: `Bug: [jira-ticket] [descripción-breve]`
- Si es un hotfix: `Hotfix: [jira-ticket] [descripción-breve]`
- Si es un refactor: `Refactor: [jira-ticket] [descripción-breve]`

## Scaffolding

En el siguiente detalle podemos revisar el scaffolding a detalle del proyecto de backoffice.

<details>
<summary><b>Expandir scaffolding</b></summary>

```scaffolding
└── agamotto-distributors-webapp
    ├── node_modules/
    └── src/
        ├── assets/
        ├── components/
        ├── layouts/
        ├── core/
        │   ├── constants/
        │   ├── hooks/
        │   ├── store/
        │   ├── services/
        │   └── models/
        │       ├── enums/
        │       ├── interfaces/
        │       └── types/
        ├── screens/
        │   ├── login/
        │   ├── summary/
        │   ├── plans/
        │   │   ├── components/
        │   │   ├── index.ts
        │   │   ├── plans.scss
        │   │   └── plans.tsx
        │   ├── app.routes.tsx
        │   └── App.tsx
        ├── utis/
        ├── app.scss
        ├── App.tsx
        ├── index.scss
        └── index.tsx
```

</details>
