let chrome = require('sinon-chrome');

let createApiClass = require('./createApiClass');


module.exports = createApiClass(
  chrome.cookies, ['get', 'getAll', 'set', 'remove', 'getAllCookieStores'],
  ['onChanged']
);
