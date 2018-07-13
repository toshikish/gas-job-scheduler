const hello = require('./src/hello');

global.callHello = () => {
  Logger.log(hello('world'));
};
