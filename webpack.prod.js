const { merge } = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');
const common = require('./webpack.common.js');
const path = require('node:path');

module.exports = merge(common, {
    mode: 'production',
    output: {
        ...common.output,
        path: path.resolve(__dirname, 'build'),
        publicPath: '/'
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'build')
        },
        client: {
            overlay: {
                errors: true,
                warnings: false,
                runtimeErrors: true
            }
        },
        compress: true,
        port: process.env.PORT || 8080,
        historyApiFallback: true
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    compress: {
                        drop_console: true,
                        comparisons: true
                    },
                    mangle: {
                        toplevel: true
                    },
                    output: {
                        comments: false,
                        beautify: false
                    }
                }
            })
        ],
        splitChunks: {
            chunks: 'all'
        }
    }
});
