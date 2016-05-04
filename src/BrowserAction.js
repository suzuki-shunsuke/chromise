let Api = require('./Api');
let chrome = require('sinon-chrome');


class BrowserAction extends Api {
  constructor(deferred, promise) {
    super(
      deferred, promise, chrome.browserAction,
      ['getTitle', 'setIcon', 'getPopup', 'getBadgeText',
       'getBadgeBackgroundColor'],
      ['onClicked']
    );
  }
}


module.exports = BrowserAction;
