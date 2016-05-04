let Api = require('./Api');
let chrome = require('sinon-chrome');


class Alarms extends Api {
  constructor(deferred, promise) {
    super(
      deferred, promise, chrome.alarms,
      ['get', 'getAll', 'clear', 'clearAll'], ['onAlarm']
    );
  }
}


module.exports = Alarms;
