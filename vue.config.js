module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/mango_site_frontend/" : "/",
  outputDir: 'docs',
  devServer: {
    port: 8081
  }
}
