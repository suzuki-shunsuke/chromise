let chrome = require('sinon-chrome');

let createApiClass = require('./createApiClass');

let childlen_params = {};
['sync', 'local', 'managed'].forEach(storage_type => {
  childlen_params[storage_type] = [
    ['get', 'getBytesInUse', 'set', 'remove', 'clear']
  ];
});

module.exports = createApiClass(
  chrome.storage, [], ['onChanged'], childlen_params
);
