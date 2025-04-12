const ESLintPlugin = require("eslint-webpack-plugin");

require("dotenv").config({ path: ".env.local" });
console.log("🔥 TISTORY_BLOG:", process.env.TISTORY_BLOG);

/**
 * Tidory Configuration
 * @see https://tidory.github.io/docs/configuration/
 */
module.exports = {
  ts_session: process.env.TISTORY_SESSION,
  entry: "./index.pug",
  output: "./dist",
  url: process.env.TISTORY_BLOG,

  preview: {
    /**
     * homeType
     *
     * NONE
     * COVER
     */
    homeType: "NONE",

    /**
     * Preview Mode
     *
     * index
     * entry
     * category
     * tag
     * guestbook
     */
    mode: "index",

    /**
     * Skin Settings
     *
     * @see https://tistory.github.io/document-tistory-skin/common/index.xml.html
     */
    skinSettings: {
      liststyle: "list",
      recentEntries: 5,
      recentComments: 5,
      lengthOfRecentNotice: 32,
      lengthOfRecentEntry: 32,
      lengthOfRecentComment: 32,
    },

    /**
     * Variables
     */
    variableSettings: {
      sidebar: false,
      "foldable-category": true,
      width: "720",
      toc: true,
      scrollspy: true,
      hljs: "xcode",
      "hljs-dark": "vs2015",
      "header-style": "simple",
    },

    /**
     * Cover Settings
     */
    coverSettings: [
      {
        description: "슬라이더",
        index: 0,
        name: "slider",
        title: "슬라이더",
        dataType: "RECENT",
        data: {
          category: "ALL",
          size: "5",
        },
      },
      {
        description: "리스트",
        index: 0,
        name: "list",
        title: "리스트",
        dataType: "RECENT",
        data: {
          category: "ALL",
          size: "5",
        },
      },
      {
        description: "그리드",
        index: 0,
        name: "grid",
        title: "그리드",
        dataType: "RECENT",
        data: {
          category: "ALL",
          size: "5",
        },
      },
      {
        description: "Z",
        index: 0,
        name: "Z",
        title: "Z",
        dataType: "RECENT",
        data: {
          category: "ALL",
          size: "5",
        },
      },
    ],
  },

  alias: {
    "@": "assets",
    "~views": "views",
  },

  /**
   * Webpack Configuration
   *
   * @param {object} webpackConfig
   */
  extends(webpackConfig) {
    webpackConfig.plugins = [
      new ESLintPlugin({ configType: "flat" }),
      ...webpackConfig.plugins,
    ];

    webpackConfig.entry = Object.assign(webpackConfig.entry, {
      app: "./assets/js/app.js",
      vendor: "./assets/js/vendor.js",
    });
  },
};
