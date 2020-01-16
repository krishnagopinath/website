const resume = require("./data/resume.json")
const {
  basics: { name, website },
} = resume

module.exports = {
  siteMetadata: {
    title: name,
    description: `The home page of Krishna Gopinath, software engineer, budding teacher & amateur photographer.`,
    author: name,
    siteUrl: website,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/data`,
        name: `siteData`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_blank",
              rel: "nofollow",
            },
          },
        ],
      },
    },
  ],
}
