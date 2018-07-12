const pkg = require('./package')

module.exports = {
  siteMetadata: {
    title: 'Programming Talks',
    description: pkg.description,
    siteUrl: pkg.homepage,
  },
  pathPrefix: `/`,
  plugins: [
    `gatsby-plugin-sharp`,
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `talk`,
        path: `${__dirname}/data/talk`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-80325806-1`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `speaker`,
        path: `${__dirname}/asset/speaker/`,
      },
    },
    `gatsby-transformer-json`,
  ],
}
