// webpack.config.js
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = {
  mode: "development",
  devtool: "eval-source-map",
  devServer: {
    watchFiles: ["./src/template.html"],
    static: './dist',
  },
};


