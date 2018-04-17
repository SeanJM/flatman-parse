const path           = require("path");
const IS_PRODUCTION  = process.env.NODE_ENV === "production";
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

const rules = [
  {
    test    : /\.js$/,
    loader  : "babel-loader",
    exclude : /node_modules/,
    query : {
      presets: [ "env" ]
    }
  }
];

module.exports = {
  mode : IS_PRODUCTION ? "production" : "development",

  module : {
    rules : rules,
  },

  target  : "node",
  entry   : path.resolve("src/index.js"),
  devtool : !IS_PRODUCTION ? "source-map" : undefined,

  output  : {
    libraryTarget : "commonjs2",
    filename      : "index.js",
    path          : path.resolve("./")
  },

  plugins: (
    IS_PRODUCTION
      ? [ new UglifyJsPlugin() ]
      : []
  )
};