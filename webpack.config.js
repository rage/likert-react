const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const autoprefixer = require('autoprefixer');
const precss = require('precss');

module.exports = {
  entry: path.join(__dirname, 'src', 'index.jsx'),

  devtool: 'source-map',

  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'LikertScale',
    libraryTarget: 'umd'
  },

  resolve: {
    modules: [path.join(__dirname, 'src'), path.join(__dirname, 'node_modules')],
    extensions: ['.js', '.jsx', '.scss'],
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',

        options: {
          presets:  ["es2015", "react", "stage-0"]
        }
      },
      {
        test:  /\.s{0,1}css$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract(['css-loader?importLoader=1&modules&localIdentName=likert-react_[path]___[name]__[local]', 'postcss-loader', 'sass-loader']),
      }
    ]
  },

  plugins: [new HtmlWebpackPlugin({ template: 'src/index.html' }), new ExtractTextPlugin('[name].css')]
};
