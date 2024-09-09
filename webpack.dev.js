const { merge } = require('webpack-merge');
const DotenvPlugin = require('dotenv-webpack');
const common = require('./webpack.common.js');
const path = require('node:path');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'eval-source-map',
    plugins: [
        new DotenvPlugin({
            path: '.env'
        })
    ],
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'public')
        },
        client: {
            overlay: {
                errors: true,
                warnings: false,
                runtimeErrors: true
            }
        },
        compress: true,
        port: process.env.PORT || 8080
    }
});
