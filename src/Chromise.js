function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}


let Apis = {
  runtime: require('./Runtime'),
  tabs: require('./Tabs'),
  storage: require('./Storage'),
};


class Chromise {
  constructor(deferred, promise) {
    let self = this;
    Object.keys(Apis).forEach(api_name => {
      let Api = Apis[api_name];
      self[api_name] = new Api(deferred, promise);
    });
  }
}


module.exports = Chromise;
