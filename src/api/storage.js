let childlen_params = {};
['sync', 'local', 'managed'].forEach(storage_type => {
  childlen_params[storage_type] = [
    ['get', 'getBytesInUse', 'set', 'remove', 'clear']
  ];
});

module.exports = [[], ['onChanged'], childlen_params];
