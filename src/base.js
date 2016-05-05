let createChromiseClass = require('./createChromiseClass');

module.exports = createChromiseClass({
  'accessibilityFeatures': require('./api/accessibilityFeatures'),
  'alarms': require('./api/alarms'),
  'bookmarks': require('./api/bookmarks'),
  'browserAction': require('./api/browserAction'),
  'browsingData': require('./api/browsingData'),
  'certificateProvider': require('./api/certificateProvider'),
  'commands': require('./api/commands'),
  'contentSettings': require('./api/contentSettings'),
  'contextMenus': require('./api/contextMenus'),
  'cookies': require('./api/cookies'),
  'debugger': require('./api/debugger'),
  'declarativeContent': require('./api/declarativeContent'),
  'desktopCapture': require('./api/desktopCapture'),
  'devtools': require('./api/devtools'),
  'runtime': require('./api/runtime'),
  'storage': require('./api/storage'),
  'tabs': require('./api/tabs'),
});
