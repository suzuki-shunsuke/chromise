let Api = require('./Api');
let chrome = require('sinon-chrome');

class ContentSetting extends Api {
  constructor(deferred, promise, name) {
    super(
      deferred, promise, chrome.contentSettings[name],
      ['clear', 'get', 'set', 'getResourceIdentifiers'], []
    );
  }
}


class ContentSettings extends Api {
  constructor(deferred, promise) {
    super(deferred, promise, chrome.contentSettings, [], []);
    let self = this;

    ['cookies', 'images', 'javascript', 'location', 'plugins', 'popups',
     'notifications', 'fullscreen', 'mouselock', 'unsandboxedPlugins',
     'automaticDownloads'].filter(name => name in chrome.contentSettings)
    .forEach(name => {
      self[name] = new ContentSetting(deferred, promise, name);
    });
  }
}


module.exports = ContentSettings;
