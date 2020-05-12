const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const port = process.env.PORT || 30120;

module.exports = {
    // Webpack configuration goes here
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: '[name].[hash].js',
        publicPath: '/'
    },
    resolve: {
        alias: {
            "react-dom": "@hot-loader/react-dom",
        },
    },
    devtool: 'inline-source-map',
    module: {
        rules: [

        // First Rule
        {
            test: /\.(js)$/,
            exclude: /node_modules/,
            use: ['babel-loader']
        },

        // Second Rule
        {
            test: /\.css$/,
            use: [
            {
                loader: 'style-loader'
            },
            {
                loader: 'css-loader',
                options: {
                modules: true,
                localsConvention: 'camelCase',
                sourceMap: true
                }
            }
            ]
        }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
        template: 'public/index.html',
        favicon: 'public/favicon.ico'
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],
    devServer: {
        host: 'localhost',
        port: port,
        historyApiFallback: true,
        open: true,
        hot: true
    }
};