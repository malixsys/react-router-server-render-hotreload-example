const webpack = require('webpack');
const path = require('path');

module.exports = [
  {
    name: 'client',
    target: 'web',
    entry: [
      'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=false&quiet=false&noInfo=false',
      'react-hot-loader/patch',
      path.resolve(__dirname, './src/client.jsx')
    ],
    output: {
      path: path.join(__dirname, 'dist'),
      filename: 'client.js',
      publicPath: '/dist/'
    },
    resolve: {
      extensions: ['.js', '.jsx']
    },
    devtool: 'source-map',
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules\/)/,
          use: [
            {
              loader: 'babel-loader'
            }
          ]
        },
        {
          test: /\.scss$/,
          use: [
            {
              loader: 'style-loader'
            },
            {
              loader: 'css-loader',
              options: {
                modules: true,
                importLoaders: 1,
                localIdentName: '[name]__[local]___[hash:base64:5]',
                sourceMap: true
              }
            },
            {
              loader: 'sass-loader'
            }
          ]
        }
      ]
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoEmitOnErrorsPlugin(),
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('development')
        }
      })
    ]
  },
  {
    name: 'server',
    target: 'node',
    entry: './server/render.jsx',
    output: {
      path: path.join(__dirname, 'dist'),
      filename: 'server.js',
      libraryTarget: 'commonjs2',
      publicPath: '/dist/'
    },
    devtool: 'source-map',
    resolve: {
      extensions: ['.js', '.jsx']
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules\/)/,
          use: [
            {
              loader: 'babel-loader'
            }
          ]
        },
        {
          test: /\.scss$/,
          use: [
            {
              loader: 'isomorphic-style-loader'
            },
            {
              loader: 'css-loader',
              options: {
                modules: true,
                importLoaders: 1,
                localIdentName: '[name]__[local]___[hash:base64:5]',
                sourceMap: true
              }
            },
            {
              loader: 'sass-loader'
            }
          ]
        }
      ]
    }
  }
];
