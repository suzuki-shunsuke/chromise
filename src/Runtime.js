let Api = require('./Api'),
    chrome = require('sinon-chrome');


class Runtime extends Api {
  constructor(deferred, promise) {
    super(
      deferred, promise, chrome.runtime, [
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
  }
};


module.exports = Runtime;
