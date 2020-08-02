module.exports = {
  pluginOptions: {
    electronBuilder: {
      chainWebpackRendererProcess(config) {
        config.plugins.delete('workbox')
        config.plugins.delete('pwa')
      },
      builderOptions: {
        productName: 'iWall',
        appId: 'com.ssrcoder.iwall',
        copyright: 'Copyright © 2020 SsrCoder',
        win: {
          icon: './public/img/icons/icon256x.ico',
        },
        mac: {
          icon: './public/img/icons/icon.icns',
        },
      },
    },
  },
}
