var path = require('path');
var webpack = require('webpack');
var AutoInstallPlugin = require('auto-install-webpack-plugin');

module.exports = {
  //devtool: 'eval',
  devtool: '#source-map',
  //devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:3333',
    'webpack/hot/only-dev-server',
    './src/index'
  ],
  devServer: {
    headers: {"Access-Control-Allow-Origin": "*"}
  },
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist'),
    publicPath: '/assets/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new AutoInstallPlugin({save: true})
  ],
  resolve: {
    extensions: ['', '.js']
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['react-hot', 'babel'],
        exclude: /node_modules/
      }, {
        test: /\.css/,
        //'css?root=./build/',
        loaders: [
          'style',
          'css-loader',
          'raw'
        ]
      },
      // Needed for the css-loader when [bootstrap-webpack](https://github.com/bline/bootstrap-webpack)
      // loads bootstrap's css.
      {test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&minetype=application/font-woff"},
      {test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&minetype=application/font-woff"},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&minetype=application/octet-stream"},
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file"},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&minetype=image/svg+xml"}
    ]
  }
};

//
//// -----
//var webpack = require('webpack');
//
//module.exports = {
//  devtool: 'source-map',
//  cache: true,
//  entry: {
//    src: './src/index.jsx',
//    bootstrap: './node_modules/bootstrap/less/bootstrap.less',
//    styles: './src/styles/index.css'
//  },
//  output: {
//    path: 'public/build',
//    filename: '[name].js'
//  },
//  module: {
//    loaders: [
//      {
//        test: /\.jsx$/,
//        loaders: ['jsx-loader?harmony']
//      },
//      {
//        test: /\.js$/, loaders: ['jsx-loader?harmony']
//      },
//      {
//        test: /\.less$/,
//        loader: "style-loader!css-loader?root=./build/!less"
//      },
//
//      // Needed for the css-loader when [bootstrap-webpack](https://github.com/bline/bootstrap-webpack)
//      // loads bootstrap's css.
//      {test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&minetype=application/font-woff"},
//      {test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&minetype=application/font-woff"},
//      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&minetype=application/octet-stream"},
//      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file"},
//      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&minetype=image/svg+xml"}
//    ]
//  },
//  plugins: [
//    new webpack.DefinePlugin({
//      __DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'true')),
//      __PRERELEASE__: JSON.stringify(JSON.parse(process.env.BUILD_PRERELEASE || 'false'))
//    })
//    , new webpack.optimize.CommonsChunkPlugin('common.js')
//  ]
//};