const merge = require('webpack-merge');
const base = require('./webpack.base.js');

// merge合并方法  接受多个参数，把参数对象合并成，后面的对象，属性会覆盖前面的
module.exports = merge(base, {
    mode: "development", //  声明当前是开发模式

    // 生成map映射文件
    devtool: "source-map",

    // 开发服务器配置
    devServer: {
        port: 8050, // 默认端口是8080
        stats: "errors-only"
    },
})