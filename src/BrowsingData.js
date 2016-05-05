let chrome = require('sinon-chrome');

let createApiClass = require('./createApiClass');


module.exports = createApiClass(
  chrome.browsingData, [
    'settings', 'remove', 'removeAppcache', 'removeCache', 'removeCookies',
    'removeDownloads', 'removeFileSystems', 'removeFormData',
    'removeHistory', 'removeIndexedDB', 'removeLocalStorage',
    'removePluginData', 'removePasswords', 'removeWebSQL'
  ]
);
