let Api = require('./Api');


function createApiClass(api, method_names, event_names) {
  class SubApi extends Api {
    constructor(deferred, promise) {
      super(deferred, promise, api, method_names, event_names);
    }
  }
  
  return SubApi;
}

module.exports = createApiClass;
