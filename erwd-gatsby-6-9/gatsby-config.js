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
