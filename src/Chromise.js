let chrome = require('sinon-chrome');


let Apis = {
  accessibilityFeatures: require('./AccessibilityFeatures'),
  alarms: require('./Alarms'),
  bookmarks: require('./Bookmarks'),
  browserAction: require('./BrowserAction'),
  browsingData: require('./BrowsingData'),
  certificateProvider: require('./CertificateProvider'),
  commands: require('./Commands'),
  contentSettings: require('./ContentSettings'),
  contextMenus: require('./ContextMenus'),
  cookies: require('./Cookies'),
  runtime: require('./Runtime'),
  storage: require('./Storage'),
  tabs: require('./Tabs'),
};


class Chromise {
  constructor(deferred, promise) {
    let self = this;
    Object.keys(Apis).filter(api_name => api_name in chrome)
    .forEach(api_name => {
      let Api = Apis[api_name];
      self[api_name] = new Api(deferred, promise);
    });
  }
}


module.exports = Chromise;
