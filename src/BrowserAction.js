let chrome = require('sinon-chrome');

let createApiClass = require('./createApiClass');


module.exports = createApiClass(
  chrome.browserAction, [
    'getTitle', 'setIcon', 'getPopup', 'getBadgeText',
    'getBadgeBackgroundColor'
  ], ['onClicked']
);
