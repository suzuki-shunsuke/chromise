let Api = require('./Api');


{
  api: api,
  method_names: method_names,
  event_names: event_names,
  children: {
    name: name
    method_names: method_names,
    event_names: event_names,
  }
}


module.exports = createApiClass;
