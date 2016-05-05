let chrome = require('sinon-chrome');

let createApiClass = require('./Api');
// let createApiClass = require('./createApiClass');

// class StorageArea extends Api {
//   constructor(deferred, promise, storage_type) {
//     super(
//       deferred, promise, chrome.storage[storage_type],
//       ['get', 'getBytesInUse', 'set', 'remove', 'clear'], []
//     );
//   }
// }
// 
// 
// 
// class Storage extends Api {
//   constructor(deferred, promise) {
//     super(deferred, promise, chrome.storage, [], ['onChanged']);
//     let self = this;
// 
//     ['sync', 'local', 'managed'].filter(t => t in chrome.storage)
//     .forEach(storage_type => {
//       self[storage_type] = new StorageArea(deferred, promise, storage_type);
//     });
//   }
// }
// 
// 
// module.exports = Storage;

let params = [['get', 'getBytesInUse', 'set', 'remove', 'clear']];

module.exports = createApiClass(
  chrome.storage, [], ['onChanged'], {
    'sync': params,
    'local': params,
    'managed': params,
  }
);
