module.exports = {
  siteMetadata: {
    title: `Rhonda Ripp Black, Authors Biography`,
    description: `Ripps writing mad mess, Ripps Author Biography Website.Ripp Black`,
    author: `@rhondaripp`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    // `gatsby-plugin-image`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `video`,
        path: `${__dirname}/src/assets/videos`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    // ,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
         
            `Philosopher\:400,400i,700,700i`,
            `Roboto\:100,300,400,500,700,900`
        ],
        display: 'swap'
      },
     
      
    }
  ],
}
