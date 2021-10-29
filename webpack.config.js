const path = require('path');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'public/js/messages.js'),
  output: {
    path: path.resolve(__dirname, 'public/js'),
    filename: 'my-first-webpack.bundle.js',
  },
  plugins: [new NodePolyfillPlugin()],
};
