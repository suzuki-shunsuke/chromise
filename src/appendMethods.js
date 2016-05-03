let createMethod = require('./createMethod');

module.exports = (deferred, promise, target, api, method_names) => {
  method_names.forEach(method_name => {
    target[method_name] = createMethod(deferred, promise, api[method_name].bind(api));
  });
};
