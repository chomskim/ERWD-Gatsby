## Build Elevating React Web Development with Gatsby

### Chapter 1

```sh
node -v
v14.18.1
npm i -g gatsby-cli
gatsby -v
Gatsby CLI version: 4.19.0
mkdir erwd-gatsby-site
cd erwd-gatsby-site
yarn init
yarn add gatsby react react-dom

```

### Add Following scripts to package.json

```
"scripts": {
"build": "gatsby build",
"develop": "gatsby develop",
"start": "npm run develop",
"serve": "gatsby serve",
"clean": "gatsby clean"
},
```

### Start

```sh
yarn start
```

### Chapter 2

```sh
yarn add gatsby-plugin-styled-components styled-components
yarn add babel-plugin-styled-components
```
