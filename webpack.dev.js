const path = require("path");

module.exports = {
  extends: path.resolve(__dirname, './webpack.base.js'),
  watch: true,
  mode: 'development',
};