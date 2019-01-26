require('dotenv').config()

module.exports = {
  siteMetadata: {
    siteName: `Lucy Tumolo RMT`,
    title: `Lucy Tumolo RMT`,
    siteUrl: `http://www.lucyrmt.com`,
    description: `Toronto Based Registered Massage Therapy`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: process.env.DATO_API_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
      }
  }
  ],
}
