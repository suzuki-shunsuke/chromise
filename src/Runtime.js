let chrome = require('sinon-chrome');

let createApiClass = require('./createApiClass');


module.exports = createApiClass(
  chrome.runtime, [
    'getBackgroundPage',
    'openOptionsPage',
    'setUninstallURL',
    'requestUpdateCheck',
    'sendMessage',
    // 'sendNativeMessage',
    'getPlatformInfo',
    'getPackageDirectoryEntry',
  ], ['onStartup', 'onInstalled']
);
