module.exports = {
  siteMetadata: {
    title: "Final Synthesis Design Studio 2022/2023",
    titleTemplate: "%s - DD18",
    description:
      "Official website of the DensityDesign Final Synthesis Design Studio, 2022/2023",
    siteUrl: "https://densitydesign.github.io/teaching-dd18/",
    url: "https://densitydesign.github.io/teaching-dd18/",
    image: "static/og-image.png", // Path to your image you placed in the 'static' folder
    twitterUsername: "@densitydesign",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    // {
    //   resolve: "gatsby-plugin-google-analytics",
    //   options: {
    //     trackingId: "",
    //   },
    // },
    "gatsby-plugin-sitemap",
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "react-icons",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
  pathPrefix: "/teaching-dd18"
  };

