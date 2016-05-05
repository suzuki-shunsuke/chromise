let chrome = require('sinon-chrome');

let createApiClass = require('./createApiClass');

let params = [['get', 'getBytesInUse', 'set', 'remove', 'clear']];

module.exports = createApiClass(
  chrome.storage, [], ['onChanged'], {
    'sync': params,
    'local': params,
    'managed': params,
  }
);
