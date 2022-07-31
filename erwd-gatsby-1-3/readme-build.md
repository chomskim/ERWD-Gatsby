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

### Start Gatsby develop

```sh
yarn start
```

### Chapter 2

```sh
yarn add gatsby-plugin-styled-components styled-components
yarn add babel-plugin-styled-components
```

### Chapter 3

```sh
yarn add gatsby-plugin-postcss postcss tailwindcss
yarn add gatsby-source-filesystem
yarn add gatsby-transformer-remark
```

### @mdx-js/mdx@v1 @mdx-js/react@v1 -- You can't use v2 yet!!

```sh
yarn add gatsby-plugin-mdx @mdx-js/mdx@v1 @mdx-js/react@v1

```

### For tailwind CSS

```sh
npx tailwindcss init

Edit tailwind.config.js
  content: ['./src/**/*.js', './MDX/**/*.js'],
  darkMode: 'media', // or 'media' or 'class'
```

### Create Prismic Repo

[Prismic Repo erwd-gatsby.prismic.io](https://erwd-gatsby.prismic.io/)

### API endpoint

```
https://erwd-gatsby.prismic.io/api/v2
```

```sh
yarn add gatsby-source-prismic gatsby-plugin-image
```
