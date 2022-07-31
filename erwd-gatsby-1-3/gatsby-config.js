module.exports = {
  siteMetadata: {
    siteUrl: `https://localhost:8000`,
    name: `CS Kim`,
    role: `Developer at Company`,
    bio: `Just do it developer`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-bio`,
        path: `${__dirname}/MD/bio`,
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `mdx-bio`,
        path: `${__dirname}/MDX`,
      },
    },
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: 'erwd-gatsby',
        schemas: {
          icebreaker: require('./src/schemas/icebreaker.json'),
        },
      },
    },
    'gatsby-plugin-mdx',
    `gatsby-plugin-postcss`,
    `gatsby-plugin-styled-components`,
  ],
}
