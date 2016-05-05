let chrome = require('sinon-chrome');

let Api = require('./Api');
let createApiClass = require('./createApiClass');


class InspectedWindow extends Api {
  constructor(deferred, promise) {
    super(
      deferred, promise, chrome.devtools,
      ['eval', 'getResources'],
      ['onResourceAdded', 'onResourceContentCommitted']
    );
  }
}


class Devtools extends Api {
  constructor(deferred, promise) {
    super(deferred, promise, chrome.devtools, [], []);

    this.inspectedWindow = new InspectedWindow(deferred, promise);
    this.network = createApiClass(
      chrome.network, ['getHAR'], ['onRequestFinished', 'onNavigated']
    );
  }
}


module.exports = Devtools;
