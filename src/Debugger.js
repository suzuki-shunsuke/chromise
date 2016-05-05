let Api = require('./Api');
let chrome = require('sinon-chrome');


class Debugger extends Api {
  constructor(deferred, promise) {
    super(
      deferred, promise, chrome.debugger,
      ['attach', 'detach', 'sendCommand', 'getTargets'],
      ['onEvent', 'onDetach']
    );
  }
}


module.exports = Debugger;
