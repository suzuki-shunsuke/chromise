module.exports = [[], [], {
  'cpu': [['getInfo']],
  'memory': [['getInfo']],
  'storage': [
    ['getInfo', 'ejectDevice', 'getAvailableCapacity'],
    ['onAttached', 'onDetached']
  ]
}];
