var webpack = require('webpack');
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
var UglifyJsPlugin = require("webpack/lib/optimize/UglifyJsPlugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin");


//将css文件， less文件单独导出
const extractLess = new ExtractTextPlugin({
    filename: '[name].less.css',
});

const extractCss = new ExtractTextPlugin({
    filename: '[name].css.css',
});


module.exports = {
    entry: {
       bundle: './src/app.js',
       vendor: ["react", "react-dom", 'react-router', 'react-router-dom', "rc-queue-anim"],
       tools: ["lodash", "reqwest", "js-md5"]
    },
    output: {
        path: `${__dirname}/build/`,
        filename: "[name].js"
    },

    plugins: [
        new CommonsChunkPlugin({
            name: ["vendor", "tools"],
            minChunks: 2
        }),

        extractCss,
        extractLess,

        // new UglifyJsPlugin({ //生产环境压缩代码
        //     mangle: {
        //         except: ['$super', '$', 'exports', 'require', 'module', '_']
        //     },
        //     compress: {
        //         warnings: false
        //     },
        //     output: {
        //         comments: false,
        //     }
        // })
    ],
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
                loader:  extractCss.extract({ 
                    fallback: 'style-loader', 
                    use: 'css-loader' 
                })
            },
            {
                test: /\.(less)$/,
                use: extractLess.extract({
                    use: [
                        {
                            loader: 'css-loader'
                        },
                        {
                            loader: "less-loader"
                        }
                    ],
                    fallback: 'style-loader'
                })
            },
            // {
            //     test: /\.css$/,
            //     use: [ 'style-loader', 'css-loader' ]
            // },
            // {
            //     test: /\.less$/,
            //     use: [{
            //         loader: "style-loader" // creates style nodes from JS strings
            //     }, {
            //         loader: "css-loader" // translates CSS into CommonJS
            //     }, {
            //         loader: "less-loader" // compiles Less to CSS
            //     }]
            // },
            {
                test: /\.(png|jpg|woff|svg|eot|ttf)$/,
                exclude: /node_modules/,
                loader: 'url-loader?limit=8192'
            }
        ],
    },
    devServer: {
        host: "localhost",
        port: 8080,
        contentBase: './',
        historyApiFallback: true
    }
};