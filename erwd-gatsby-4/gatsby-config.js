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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-blog-posts`,
        path: `${__dirname}/MD/blog-posts`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-postcss`,
    {
      resolve: `@gatsby-contrib/gatsby-plugin-elasticlunr-search`,
      options: {
        fields: [`title`, `tags`, `desc`],
        resolvers: {
          MarkdownRemark: {
            title: node => node.frontmatter.title,
            tags: node => node.frontmatter.tags,
            desc: node => node.frontmatter.desc,
            path: node => `/blog`+node.fields.slug,
          },
        },
        filter: (node, getNode) => node.frontmatter.type === "Blog",
      },
    },
    `gatsby-plugin-styled-components`,
  ],
}
