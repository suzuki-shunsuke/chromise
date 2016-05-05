let chrome = require('sinon-chrome');

let createApiClass = require('./createApiClass');

let childlen_params = {
  'inspectedWindow': [
    ['eval', 'getResources'], ['onResourceAdded', 'onResourceContentCommitted']
  ],
  'network': [['getHAR'], ['onRequestFinished', 'onNavigated']],
};


module.exports = createApiClass(
  chrome.devtools, [], [], childlen_params
);
