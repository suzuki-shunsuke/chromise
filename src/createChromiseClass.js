let chrome = require('sinon-chrome');

let createApiClass = require('./createApiClass');


module.exports = apis_params => {
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
};
