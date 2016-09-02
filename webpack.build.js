var config = require('./webpack.config.js')

config.entry = {
  'page-builder': './src/index.js',
}

config.output = {

  filename: './dist/[name].js',
  library: 'PageBuilder',
  libraryTarget: 'umd'
}


module.exports = config