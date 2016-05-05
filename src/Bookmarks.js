let chrome = require('sinon-chrome');

let createApiClass = require('./createApiClass');


module.exports = createApiClass(
  chrome.bookmarks, [
    'get', 'getChildren', 'getRecent', 'getTree', 'getSubTree', 'search',
    'create', 'move', 'update', 'remove', 'removeTree'
  ], [
    'onCreated', 'onRemoved', 'onChanged', 'onMoved',
    'onChildrenReordered', 'onImportBegan', 'onImportEnded'
  ]
);
