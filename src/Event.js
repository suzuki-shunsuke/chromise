let appendMethods = require('./appendMethods');

/**
 * @access public
 * chromise.Event class.
 * @see https://developer.chrome.com/extensions/events
 * @since 0.1.0
 */
class Event {
  /**
   * @param {Function} deferred - Create a Deferred object.
   * @param {Function} promise - Create a Promise object.
   * @param {chrome.Event} event
   */
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
}


module.exports = Event;
