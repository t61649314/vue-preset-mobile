const { defineConfig } = require('@vue/cli-service');

const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 8090,
  },
  chainWebpack: (config) => {
    config.module
      .rule('svg')
      .exclude
      .add(resolve('src/icons'))
      .end();
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include
      .add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]',
      });
    config.module
      .rule('font-ttf')
      // .test(/\.(woff2?|eot|ttf|otf|ttc)(\?.*)?$/)
      .test(/\.(ttc)(\?.*)?$/)
      .use('url-loader')
      .loader('url-loader')
      .options({
        limit: 20000,
        name: 'fonts/[name]-[hash:7].[ext]', // `fonts/[name]-[hash].[ext]`,
        outputPath: 'fonts/',
        esModule: false,
      })
      .end();
  },
});
