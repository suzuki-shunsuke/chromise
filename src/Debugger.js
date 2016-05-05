let chrome = require('sinon-chrome');

let createApiClass = require('./createApiClass');


module.exports = createApiClass(
  chrome.debugger, ['attach', 'detach', 'sendCommand', 'getTargets'],
  ['onEvent', 'onDetach']
);
