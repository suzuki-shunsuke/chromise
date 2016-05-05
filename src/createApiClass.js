let appendMethods = require('./appendMethods');
let Event = require('./Event');


function createApiClass(
  api, method_names, event_names=[], children_params={}
) {
  class Api {
    constructor(deferred, promise) {
      let self = this;
      appendMethods(deferred, promise, this, api, method_names);
      event_names.filter(event_name => event_name in api)
      .forEach(event_name => {
        self[event_name] = new Event(deferred, promise, api[event_name]);
      });
      Object.keys(children_params).filter(child_name => child_name in api)
      .forEach(child_name => {
        let child_params = children_params[child_name];
        let child = createApiClass.apply(
          null, [api[child_name]].concat(child_params)
        );
        self[child_name] = new child(deferred, promise);
      });
    }
  }
  
  return Api;
}


module.exports = createApiClass;
