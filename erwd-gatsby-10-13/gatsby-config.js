require('dotenv').config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    siteUrl: `https://www.kimandhwang.com/`,
    name: `CS Kim`,
    role: `Developer at Company`,
    bio: `Just do it developer`,
    social: {
      twitter: '@chomskim',
    },
  },
  plugins: [
    {
      resolve: 'gatsby-theme-i18n-react-i18next',
      options: {
        locales: './i18n/locales',
        i18nextOptions: {
          ns: ['globals'],
        },
      },
    },
    {
      resolve: 'gatsby-theme-i18n',
      options: {
        defaultLang: 'en',
        configPath: require.resolve('./i18n/config.json'),
      },
    },
    {
      resolve: 'gatsby-theme-i18n-react-i18next',
      options: {
        locales: './i18n/locales',
        i18nextOptions: {
          ns: ['globals'],
        },
      },
    },
    'gatsby-theme-sample-page',
    {
      resolve: `gatsby-theme-events-section`,
      options: {
        path: 'test',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-bio`,
        path: `${__dirname}/MD/bio`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-blog-posts`,
        path: `${__dirname}/MD/blog-posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/assets/images`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-postcss`,
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: 'erwd-gatsby',
        schemas: {
          icebreaker: require('./src/schemas/icebreaker.json'),
          profile: require('./src/schemas/profile.json'),
        },
        shouldDownloadFiles: () => true,
      },
    },
    {
      resolve: `gatsby-source-github-profile`,
      options: {
        token: process.env.GITHUB_PROFILE_BEARER_TOKEN,
        username: 'chomskim',
      },
    },
    {
      resolve: `@gatsby-contrib/gatsby-plugin-elasticlunr-search`,
      options: {
        fields: [`title`, `tags`, `desc`],
        resolvers: {
          MarkdownRemark: {
            title: (node) => node.frontmatter.title,
            tags: (node) => node.frontmatter.tags,
            desc: (node) => node.frontmatter.desc,
            path: (node) => `/blog` + node.fields.slug,
          },
        },
        filter: (node, getNode) => node.frontmatter.type === 'Blog',
      },
    },
    `gatsby-plugin-styled-components`,
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet-async`,
    `gatsby-plugin-sitemap`,
  ],
}
