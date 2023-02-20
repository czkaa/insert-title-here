module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/insert-title-here/" : "/insert-title-here/",
  configureWebpack: {
    plugins: [
      require('unplugin-vue-components/webpack')({ /* options */ }),
    ],
  },
};