let appendMethods = require('./appendMethods');


class Event {
  constructor(deferred, promise, event) {
    appendMethods(deferred, promise, this, event, [
      'addListener',
      'removeListener',
      'hasListener',
      'addRules',
      'getRules',
      'removeRules',
    ]);
  }
};


module.exports = Event;
