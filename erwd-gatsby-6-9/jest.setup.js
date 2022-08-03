require(`@testing-library/jest-dom/extend-expect`)
const { useStaticQuery } = require('gatsby')

beforeAll(() => {
  useStaticQuery.mockReturnValue({
    site: {
      siteMetadata: {
        siteUrl: 'https://www.kimandhwang.com/',
        social: { twitter: '@chomskim' },
      },
    },
  })
})
