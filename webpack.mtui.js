var path = require('path')
var webpack = require('webpack')
const pkg = require('./package.json')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: './src/js/mtui.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: './js/',
    filename: 'mtui.min.js',
    library: 'weui',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    libraryExport: "default"
  },
  module: {
    rules: [{
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        loader: 'html-loader?minimize'
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader', 'less-loader', 'postcss-loader'],
          fallback: 'style-loader',
        }),
      }
    ]
  },
  resolve: {
    extensions: ['.js']
  },
  // devtool: '#source-map',
  plugins: [
    // 注释头
    new webpack.BannerPlugin([
      pkg.name + ' v' + pkg.version + ' (' + pkg.homepage + ')',
      'Copyright ' + new Date().getFullYear() + ', ' + pkg.author,
      pkg.license + ' license'
    ].join('\n')),
    // 生成mtui.css
    new ExtractTextPlugin({
      filename: './mtui.min.css',
      disable: false,
      allChunks: true,
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false,
        drop_console: true
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ]
}
