let chrome = require('sinon-chrome');


function convertArgumentsToArray(args) {
  return args.length === 1 ? [args[0]] : Array.apply(null, args);
}


module.exports = (deferred, promise, method) => {
  let undefined;

  function func() {
    let d = deferred(),
        args = convertArgumentsToArray(arguments);

    function callback() {
      if (chrome.runtime.lastError === undefined) {
        d.resolve.apply(d, convertArgumentsToArray(arguments));
      } else {
        d.reject(chrome.runtime.lastError);
      }
    }

    args.push(callback);

    method.apply(null, args);
    return promise(d);
  }

  return func;
};
