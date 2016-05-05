let Api = require('./Api');
let chrome = require('sinon-chrome');


class DeclarativeContent extends Api {
  constructor(deferred, promise) {
    super(
      deferred, promise, chrome.declarativeContent,
      [], ['onPageChanged']
    );
  }
}


module.exports = DeclarativeContent;
