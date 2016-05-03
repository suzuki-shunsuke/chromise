let appendMethods = require('./appendMethods'),
    Event = require('./Events'),
    createMethod = require('./createMethod');


class Api {
  constructor(deferred, promise, api, method_names, event_names) {
    let self = this;
    appendMethods(deferred, promise, this, api, method_names);
    event_names.forEach(event_name => {
      self[event_name] = new Event(deferred, promise, api[event_name]);
    });
  }
}


module.exports = Api;
