let Api = require('./Api');
let chrome = require('sinon-chrome');


class Cookies extends Api {
  constructor(deferred, promise) {
    super(
      deferred, promise, chrome.cookies,
      ['get', 'getAll', 'set', 'remove', 'getAllCookieStores'], ['onChanged']
    );
  }
}


module.exports = Cookies;
