var webpack = require('webpack');
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
var UglifyJsPlugin = require("webpack/lib/optimize/UglifyJsPlugin");
module.exports = {
    entry: {
       bundle: './src/app.js',
       vendor: ["react", "react-dom", 'react-router', 'react-router-dom', "rc-queue-anim"],
       tools: ["lodash", "reqwest", "js-md5"]
    },
    output: {
        path: __dirname,
        filename: "[name].js"
    },

    plugins: [
        new CommonsChunkPlugin({
            name: ["vendor", "tools"],
            minChunks: 2
        }),

        new UglifyJsPlugin({ //生产环境压缩代码
            mangle: {
                except: ['$super', '$', 'exports', 'require', 'module', '_']
            },
            compress: {
                warnings: false
            },
            output: {
                comments: false,
            }
        })
    ],
    devtool: 'cheap-module-source-map',
    
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    plugins: ['transform-runtime', ['import', { //按需引入antd, 减小项目体积
                      libraryName: 'antd',
                      style: "true"
                    }]],
                    presets: ['es2015', 'react', 'stage-2']
                }
            }, 
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.(png|jpg|woff|svg|eot|ttf)$/,
                exclude: /node_modules/,
                loader: 'url-loader?limit=8192'
            }
        ],
    },
    devServer: {
        // host: "h5.api.cashlending.com",
        // host: "192.168.11.220",
        // host: "192.168.11.220",
        host: "localhost",
        port: 8080,
        contentBase: './',
        historyApiFallback: true
    }
};