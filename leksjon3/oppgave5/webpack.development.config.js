const {merge} = require('webpack-merge')
const path = require('path')
const common = require('./webpack.common.config')

module.exports = merge(common,{
    mode: 'development',
    devServer: {
        port: 3000,
        contentBase: path.relative(__dirname, 'public'),
        historyApiFallback: true,
    },
    devtool: 'eval-source-map'
})