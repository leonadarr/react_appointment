const path = require("path");
const webpack = require("webpack");

module.exports = {
    entry: ['react-hot-loader/patch', './src'],
    mode: "development",
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    }
};
