module.exports = {

  siteMetadata: {
    title: `Iterative.ai`,
    description: `Collaboration for machine learning projects. We are the company behind development of DVC and CML, open-source tools to streamline the workflow of data scientist`,
    author: `Iterative.ai`,
    siteUrl: "https://iterative.ai/",
  },

  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    `gatsby-plugin-styled-components`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
