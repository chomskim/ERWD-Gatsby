## Build Elevating React Web Development with Gatsby

### Chapter 6

```sh
yarn add react-helmet-async gatsby-plugin-react-helmet-async
yarn add gatsby-plugin-sitemap
```

### Chapter 7

```sh
yarn add jest babel-jest @testing-library/jest-dom @testing-library/react -D
yarn add babel-preset-gatsby identity-obj-proxy -D
yarn add -D react-test-renderer
```

#### To resolve error -- Test environment jest-environment-jsdom cannot be found

```sh
yarn add -D jest-environment-jsdom
```

#### **snapshots** is created ang go testing, if old snapshot exist there can be error

```sh
remove __snapshots__ folder

yarn test
```

### Lighthouse

```sh
yarn add web-vitals
gatsby build
gatsby serve
```

### Chapter 8

```
https://analytics.google.com/analytics/web/?authuser=0#/provision/create
https://sentry.io/signup/
```

### Chapter 9

#### Deploy to -- https://www.gatsbyjs.com/

- Use GitHub Repository

#### Build server.js with express

```sh
yarn add express express-basic-auth

node server.js
```
