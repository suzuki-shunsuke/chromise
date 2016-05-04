let Api = require('./Api');
let chrome = require('sinon-chrome');


class Commands extends Api {
  constructor(deferred, promise) {
    super(
      deferred, promise, chrome.commands,
      ['getAll'], ['onCommand']
    );
  }
}


module.exports = Commands;
