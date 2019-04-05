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
      resolve: 'gatsby-plugin-sentry',
      options: {
        dsn: 'https://3b39f465f7324fc999f17b0a40b32531@sentry.io/1380638',
        // Optional settings, see https://docs.sentry.io/clients/node/config/#optional-settings
        environment: process.env.NODE_ENV,
        enabled: (() =>
          ['production', 'stage', 'development'].indexOf(
            process.env.NODE_ENV
          ) !== -1)(),
      },
    },
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
    {
      resolve: `gatsby-plugin-fullstory`,
      options: {
        fs_org: 'KB468',
      },
    },
  ],
}
