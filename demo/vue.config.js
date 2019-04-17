const path = require("path");
module.exports = {
    publicPath: process.env.NODE_ENV === 'production'? './': '/',
    css: {
        loaderOptions: {
            sass: {
              // @是src的别名
              data: `
                @import "@/common/style/common.module.scss";
              `
            }
        }
    },
    pluginOptions: {
    'style-resources-loader': {
        preProcessor: 'scss',
        patterns: [
            '/Users/calamus/calamus/my-project/vuetify/demo/src/common/style/common.module.scss'
            ]
        }
    }
}
