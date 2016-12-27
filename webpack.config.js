const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry:{
    'client.js': './app/app.jsx',
},
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      Main: 'app/components/Main.js',
      NavigationBar: 'app/components/NavigationBar.js',
      Weather: 'app/components/Weather.js',
      About: 'app/components/About.js',
      Examples: 'app/components/Examples.js',
      WeatherForm: 'app/components/WeatherForm.js',
      WeatherMessage: 'app/components/WeatherMessage.js',
      Apixu: 'app/api/Apixu.js',
      style: 'app/styles.scss'
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-1', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      },
      {
       test: /\.scss$/,
       loaders: ['style', 'css', 'sass']
     },
     {
       test: /\.css$/,
       loader: ExtractTextPlugin.extract("style-loader", "css-loader")
     }
    ]
  }
};
