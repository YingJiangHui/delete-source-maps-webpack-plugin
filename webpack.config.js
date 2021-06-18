module.exports = {
  mode: 'development',
  entry: {
    index:'./src/index.ts'
  },
  module: {
    rules: [{
      test: /\.ts$/,
      exclude: /(node_modules)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [
            '@babel/preset-env',
            '@babel/preset-typescript'
          ]
        }
      }
    }]
  },
  // rest of the webpack config
  resolve: {
    // ... rest of the resolve config
    fallback: {
      "fs": false,
      "tls": false,
      "net": false,
      "path": false,
      "zlib": false,
      "http": false,
      "https": false,
      "stream": false,
      "crypto": false,
      "crypto-browserify": require.resolve('crypto-browserify'), //if you want to use this module also don't forget npm i crypto-browserify
    }
  },
};