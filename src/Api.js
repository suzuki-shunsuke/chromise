let appendMethods = require('./appendMethods');
let Event = require('./Event');


class Api {
  constructor(deferred, promise, api, method_names, event_names) {
    let self = this;
    appendMethods(deferred, promise, this, api, method_names);
    event_names.filter(event_name => event_name in api)
    .forEach(event_name => {
      self[event_name] = new Event(deferred, promise, api[event_name]);
    });
  }
}


module.exports = Api;
