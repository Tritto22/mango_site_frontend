module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/mango_site_frontend/" : "/",
  outputDir: 'docs',
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'mango_site_frontend'
    }
  },
  devServer: {
    port: 8081,
    historyApiFallback: true
  }
}
