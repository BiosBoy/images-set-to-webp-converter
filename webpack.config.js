const webpack = require('webpack')
const path = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const debug = require('debug')('app:webpack::config')

// ------------------------------------
// Rules
// ------------------------------------
const fileLoadersRules = [
  // JAVSCRIPT|TYPESCRIPT
  {
    test: /\.(js|jsx|ts|tsx)?$/,
    loader: 'awesome-typescript-loader',
    exclude: [/node_modules/]
  },
  // JSON
  {
    type: 'javascript/auto',
    test: /\.json$/,
    loader: 'json-loader'
  }
]

// ------------------------------------
// Optimization
// ------------------------------------
const compOptimization = {
  minimizer: [
    new UglifyJsPlugin({
      uglifyOptions: {
        compress: {
          unused: true,
          dead_code: true,
          warnings: false
        }
      },
      sourceMap: false
    })
  ]
}


// // ------------------------------------
// // Bundle externals
// // ------------------------------------
// const externalBundles = {
//   fs: 'fs',
//   cwebp: 'cwebp'
// }


const createConfig = () => {
  debug('\x1b[36m', '=== Prepearing Webpack to work... ===')

  const webpackConfig = {
    // optimization: compOptimization,
    mode: 'development',
    entry: {
      app: path.resolve(__dirname, 'src/index.ts')
    },
    // externals: externalBundles,
    target: 'node',
    output: {
      filename: 'imagesToWebP.js',
      path: path.resolve(__dirname, 'public')
    },
    module: {
      rules: fileLoadersRules
    },
    plugins: [
      new webpack.IgnorePlugin(/vertx/)
    ],
    resolve: {
      modules: ['node_modules'],
      extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
    }
  }

  debug('\x1b[36m', '=== Webpack is configured successfuly! ===')

  return webpackConfig
}

module.exports = createConfig()
