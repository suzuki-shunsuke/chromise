let Api = require('./Api');
let chrome = require('sinon-chrome');


class AccessibilityFeature extends Api {
  constructor(deferred, promise, name) {
    super(
      deferred, promise, chrome.accessibilityFeatures[name],
      ['get', 'set', 'clear'], []
    );
  }
}


class AccessibilityFeatures extends Api {
  constructor(deferred, promise) {
    super(deferred, promise, chrome.accessibilityFeatures, [], []);
    let self = this;

    [
      'spokenFeedback',
      'largeCursor',
      'stickyKeys',
      'highContrast',
      'screenMagnifier',
      'autoclick',
      'virtualKeyboard',
      'animationPolicy',
    ].forEach(name => {
      self[name] = new AccessibilityFeature(deferred, promise, name);
    });
  }
}


module.exports = AccessibilityFeatures;
