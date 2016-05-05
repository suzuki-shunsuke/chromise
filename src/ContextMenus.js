let chrome = require('sinon-chrome');

let createApiClass = require('./createApiClass');


module.exports = createApiClass(
  chrome.contextMenus, ['create', 'update', 'remove', 'removeAll'],
  ['onClicked']
);
