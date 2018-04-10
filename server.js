const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');

const serverConfig = { publicPath: config.output.publicPath }

new WebpackDevServer(
  webpack(config),
  serverConfig
).listen(3000, '0.0.0.0', (err, result) => {
  if (err) console.log(err);
  console.log('Running at http://0.0.0.0:3000');
});
