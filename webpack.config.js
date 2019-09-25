<<<<<<< HEAD
import dotenv from 'dotenv';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
=======
const dotenv = require('dotenv');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
>>>>>>> a2d1621455e657b96361083c050a66061d943b82

const sourcePath = path.join(__dirname, './src');
const distPath = path.join(__dirname, './dist');

dotenv.config();

module.exports = (env) => ({
  mode: env.environment,
  devServer: {
    contentBase: distPath,
<<<<<<< HEAD
    host: process.env.host,
    port: process.env.port,
=======
>>>>>>> a2d1621455e657b96361083c050a66061d943b82
    historyApiFallback: true,
    overlay:
        env.environment === 'development'
          ? { errors: true, warnings: true }
          : {},
  },
  entry: [path.join(sourcePath, './index.js')],
  output: {
    path: distPath,
    filename: 'js/[name].[hash].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {},
        },
      },
      {
        test: /\.css$/,
        loader: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(sourcePath, './index.html'),
    }),
    new CleanWebpackPlugin(),
  ],
});
