const path = require('path');
const webpack = require('webpack')

module.exports = {
  mode: 'production',
  target: 'es5',
  entry: path.resolve(__dirname, 'src/index.js'),
  externals: {
    clappr: {
      amd: 'clappr',
      commonjs: 'clappr',
      commonjs2: 'clappr',
      root: 'Clappr'
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        },
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'clappr-title-plugin.js',
    library: {
      name: 'ClapprTitlePlugin',
      type: 'umd',
    },
  },
  plugins: [
    new webpack.DefinePlugin({
      CLAPPR_CORE_VERSION: JSON.stringify(require("@clappr/core/package.json").version),
    })
  ],
};
