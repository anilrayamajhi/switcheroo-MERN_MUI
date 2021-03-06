module.exports = {
  entry: [
    './client/src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    },{
      test:/\.scss$/,
      loader:'style-loader!css-loader!sass-loader'
    },{
      test: /\.(jpe?g|png|gif|svg)$/i,
      loader: 'file-loader',
      options: {
        name: '[path][name].[hash].[ext]',
      },
    }
  ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
