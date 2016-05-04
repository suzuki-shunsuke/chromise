let Api = require('./Api'),
    chrome = require('sinon-chrome');

class StorageArea extends Api {
  constructor(deferred, promise, storage_type) {
    super(
      deferred, promise, chrome.storage[storage_type], [
        'get',
        'getBytesInUse',
        'set',
        'remove',
        'clear'
      ], []
    );
  }
}


class Storage extends Api {
  constructor(deferred, promise) {
    super(deferred, promise, chrome.storage, [], ['onChanged']);
    let self = this;

    ['sync', 'local', 'managed'].forEach(storage_type => {
      self[storage_type] = new StorageArea(deferred, promise, storage_type);
    });
  }
};


module.exports = Storage;
