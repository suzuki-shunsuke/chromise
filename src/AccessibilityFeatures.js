let chrome = require('sinon-chrome');

let createApiClass = require('./createApiClass');

let childlen_params = {};
[
  'spokenFeedback', 'largeCursor', 'stickyKeys', 'highContrast',
  'screenMagnifier', 'autoclick', 'virtualKeyboard', 'animationPolicy'
].forEach(children_name => {
  childlen_params[children_name] = [['get', 'set', 'clear']];
});


module.exports = createApiClass(
  chrome.accessibilityFeatures, [], [], childlen_params
);
// 
// 
// class AccessibilityFeature extends Api {
//   constructor(deferred, promise, name) {
//     super(
//       deferred, promise, chrome.accessibilityFeatures[name],
//       ['get', 'set', 'clear'], []
//     );
//   }
// }
// 
// 
// class AccessibilityFeatures extends Api {
//   constructor(deferred, promise) {
//     super(deferred, promise, chrome.accessibilityFeatures, [], []);
//     let self = this;
// 
//     [
//       'spokenFeedback',
//       'largeCursor',
//       'stickyKeys',
//       'highContrast',
//       'screenMagnifier',
//       'autoclick',
//       'virtualKeyboard',
//       'animationPolicy',
//     ].filter(name => name in chrome.accessibilityFeatures)
//     .forEach(name => {
//       self[name] = new AccessibilityFeature(deferred, promise, name);
//     });
//   }
// }
// 
// 
// module.exports = AccessibilityFeatures;
