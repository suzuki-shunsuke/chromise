let childlen_params = {
  'inspectedWindow': [
    ['eval', 'getResources'], ['onResourceAdded', 'onResourceContentCommitted']
  ],
  'network': [['getHAR'], ['onRequestFinished', 'onNavigated']],
};


module.exports = [
  [], [], childlen_params
];
