let Api = require('./Api');
let chrome = require('sinon-chrome');


class BrowsingData extends Api {
  constructor(deferred, promise) {
    super(
      deferred, promise, chrome.browsingData,
      ['settings', 'remove', 'removeAppcache', 'removeCache', 'removeCookies',
       'removeDownloads', 'removeFileSystems', 'removeFormData',
       'removeHistory', 'removeIndexedDB', 'removeLocalStorage',
       'removePluginData', 'removePasswords', 'removeWebSQL'],
      []
    );
  }
}


module.exports = BrowsingData;
