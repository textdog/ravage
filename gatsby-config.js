/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Ravage`,
    description: `A site about a performance art narrative called Ravage`,
    author: `Tiff Gum Ying Cheng`,
  },
  plugins: [
      {
  resolve: 'gatsby-plugin-mailchimp',
  options: {
    endpoint: 'https://ravagecity.us5.list-manage.com/subscribe/post?u=d6fa36d42324513c637a142da&amp;id=83dedd8fba'
      },
    },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `src`,
          path: `${__dirname}/src/`,
        },
      },
    `gatsby-transformer-remark`,  
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathtoConfigModule: 'src/utils/typography',
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
       options: {
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#6b37bf`,
        theme_color: `#6b37bf`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
       // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
  `gatsby-plugin-offline`,
  `gatsby-plugin-react-helmet`,
  ]
}