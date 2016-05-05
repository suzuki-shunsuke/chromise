let chrome = require('sinon-chrome');

let createApiClass = require('./createApiClass');


function createChromise(apis_params) {
  class Chromise {
    constructor(deferred, promise) {
      let self = this;
      Object.keys(apis_params).filter(api_name => api_name in chrome)
      .forEach(api_name => {
        let chrome_api = chrome[api_name];
        let api_params = apis_params[api_name];
        let Api = createApiClass.apply(null, [chrome_api].concat(api_params));
        self[api_name] = new Api(deferred, promise);
      });
    }
  }

  return Chromise;
}

module.exports = createChromise({
  'storage': require('./Storage'),
});


// let Apis = {
//   accessibilityFeatures: require('./AccessibilityFeatures'),
//   alarms: require('./Alarms'),
//   bookmarks: require('./Bookmarks'),
//   browserAction: require('./BrowserAction'),
//   browsingData: require('./BrowsingData'),
//   certificateProvider: require('./CertificateProvider'),
//   commands: require('./Commands'),
//   contentSettings: require('./ContentSettings'),
//   contextMenus: require('./ContextMenus'),
//   cookies: require('./Cookies'),
//   runtime: require('./Runtime'),
//   storage: require('./Storage'),
//   tabs: require('./Tabs'),
// };
// 
// 
// class Chromise {
//   constructor(deferred, promise) {
//     let self = this;
//     Object.keys(Apis).filter(api_name => api_name in chrome)
//     .forEach(api_name => {
//       let Api = Apis[api_name];
//       self[api_name] = new Api(deferred, promise);
//     });
//   }
// }
// 
// 
// module.exports = Chromise;
