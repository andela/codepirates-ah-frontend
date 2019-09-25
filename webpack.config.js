import dotenv from 'dotenv';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';

const sourcePath = path.join(__dirname, './src');
const distPath = path.join(__dirname, './dist');

dotenv.config();

module.exports = (env) => ({
  mode: env.environment,
  devServer: {
    contentBase: distPath,
    host: process.env.host,
    port: process.env.port,
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
          options: {
            presets: [
              ['@babel/preset-env', {
                debug: true,
                useBuiltIns: 'usage',
                corejs: 3,
              }],
              '@babel/preset-react',
            ],
            plugins: [['@babel/plugin-proposal-class-properties', { loose: true }]],
          },
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
