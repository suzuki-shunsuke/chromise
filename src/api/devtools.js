let childlen_params = {
  'inspectedWindow': [
    ['eval', 'getResources'], ['onResourceAdded', 'onResourceContentCommitted']
  ],
  'network': [['getHAR'], ['onRequestFinished', 'onNavigated']],
  'panel': [['create', 'setOpenResourceHandler', 'openResource'], [], {
    'elements': [['createSidebarPane']],
    'sources': [['createSidebarPane']],
  }]
};


module.exports = [
  [], [], childlen_params
];
