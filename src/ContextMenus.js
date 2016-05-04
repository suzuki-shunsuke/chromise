let Api = require('./Api');
let chrome = require('sinon-chrome');


class ContextMenus extends Api {
  constructor(deferred, promise) {
    super(
      deferred, promise, chrome.contextMenus,
      ['create', 'update', 'remove', 'removeAll'], ['onClicked']
    );
  }
}


module.exports = ContextMenus;
