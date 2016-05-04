let Api = require('./Api');
let chrome = require('sinon-chrome');


class Bookmarks extends Api {
  constructor(deferred, promise) {
    super(
      deferred, promise, chrome.bookmarks,
      ['get', 'getChildren', 'getRecent', 'getTree', 'getSubTree', 'search',
       'create', 'move', 'update', 'remove', 'removeTree'],
      ['onCreated', 'onRemoved', 'onChanged', 'onMoved',
       'onChildrenReordered', 'onImportBegan', 'onImportEnded']
    );
  }
}

module.exports = Bookmarks;
