const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
  context: __dirname,
  entry: './app/assets/js/App.jsx',
  output: {
    path: path.join(__dirname, '/dist/js'),
    publicPath: path.resolve(__dirname, '/dist/js'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json', '.scss']
  },
  stats: {
    colors: true,
    chunks: false
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        loader:
          ExtractTextPlugin.extract('css!postcss!sass'),
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
        {test: /\.svg/, loader: 'svg-url-loader'}
    ]
  },
  postcss: function () {
    return [
      require('autoprefixer')
    ];
  },
  plugins: [
      new ExtractTextPlugin('./../css/style.css', {
          allChunks: true
      }),
      new webpack.DefinePlugin({
        'process.env':{
          'NODE_ENV': JSON.stringify('production')
        }
      }),
      new webpack.optimize.UglifyJsPlugin({
        compress:{
          warnings: false
        }
      })
  ]
}
