let chrome = require('sinon-chrome');

let createApiClass = require('./createApiClass');


module.exports = createApiClass(
  chrome.alarms, ['get', 'getAll', 'clear', 'clearAll'], ['onAlarm']
);
