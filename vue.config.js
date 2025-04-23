const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  publicPath: './',
  outputDir: 'docs',
  assetsDir: 'static',
  transpileDependencies: true,
  pages: {
    index: {
      entry: 'src/main.js',
      title: 'Yuqi Huang - Portfolio',
    }
  },
  chainWebpack: config => {
    config.module
      .rule('markdown')
      .test(/\.md$/)
      .use('raw-loader')
      .loader('raw-loader')
      .end();
  }
})
