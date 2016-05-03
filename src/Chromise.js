function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}


let api_names = [
  'runtime',
  'tabs',
  'storage'
];

let apis = {};
api_names.forEach(
  api_name => apis[api_name] = require('./' + capitalize(api_name))
);


class Chromise {
  constructor(deferred, promise) {
    let self = this;
    api_names.forEach(api_name => self[api_name] = new (apis[api_name])(deferred, promise));
  }
}


module.exports = Chromise;
