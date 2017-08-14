const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
/*
 * We've enabled UglifyJSPlugin for you! This minifies your app
 * in order to load faster and run less javascript.
 *
 * https://github.com/webpack-contrib/uglifyjs-webpack-plugin
 *
 */

const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

/*
 * We've enabled Postcss, autoprefixer and precss for you. This allows your app
 * to lint  CSS, support variables and mixins, transpile future CSS syntax,
 * inline images, and more!
 *
 * To enable SASS or LESS, add the respective loaders to module.rules
 *
 * https://github.com/postcss/postcss
 *
 * https://github.com/postcss/autoprefixer
 *
 * https://github.com/jonathantneal/precss
 *
 */

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
