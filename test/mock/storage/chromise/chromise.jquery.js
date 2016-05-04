(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("jQuery"), require("chrome"));
	else if(typeof define === 'function' && define.amd)
		define(["jQuery", "chrome"], factory);
	else if(typeof exports === 'object')
		exports["chromise"] = factory(require("jQuery"), require("chrome"));
	else
		root["chromise"] = factory(root["jQuery"], root["chrome"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_8__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var $ = __webpack_require__(2),
	    Chromise = __webpack_require__(3);

	module.exports = new Chromise($.Deferred.bind($), function (d) {
	    return d.promise();
	});

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function capitalize(str) {
	  return str.charAt(0).toUpperCase() + str.slice(1);
	}

	var Apis = {
	  runtime: __webpack_require__(4),
	  tabs: __webpack_require__(10),
	  storage: __webpack_require__(11)
	};

	var Chromise = function Chromise(deferred, promise) {
	  _classCallCheck(this, Chromise);

	  var self = this;
	  Object.keys(Apis).forEach(function (api_name) {
	    var Api = Apis[api_name];
	    self[api_name] = new Api(deferred, promise);
	  });
	};

	module.exports = Chromise;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Api = __webpack_require__(5),
	    chrome = __webpack_require__(8);

	var Runtime = function (_Api) {
	  _inherits(Runtime, _Api);

	  function Runtime(deferred, promise) {
	    _classCallCheck(this, Runtime);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Runtime).call(this, deferred, promise, chrome.runtime, ['getBackgroundPage', 'openOptionsPage', 'setUninstallURL', 'requestUpdateCheck', 'sendMessage',
	    // 'sendNativeMessage',
	    'getPlatformInfo', 'getPackageDirectoryEntry'], ['onStartup', 'onInstalled']));
	  }

	  return Runtime;
	}(Api);

	module.exports = Runtime;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var appendMethods = __webpack_require__(6);
	var Event = __webpack_require__(9);

	var Api = function Api(deferred, promise, api, method_names, event_names) {
	  _classCallCheck(this, Api);

	  var self = this;
	  appendMethods(deferred, promise, this, api, method_names);
	  event_names.forEach(function (event_name) {
	    self[event_name] = new Event(deferred, promise, api[event_name]);
	  });
	};

	module.exports = Api;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var createMethod = __webpack_require__(7);

	module.exports = function (deferred, promise, target, api, method_names) {
	  method_names.forEach(function (method_name) {
	    if (api[method_name]) {
	      target[method_name] = createMethod(deferred, promise, api[method_name].bind(api));
	    }
	  });
	};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var chrome = __webpack_require__(8);

	function convertArgumentsToArray(args) {
	  return args.length === 1 ? [args[0]] : Array.apply(null, args);
	}

	module.exports = function (deferred, promise, method) {
	  var undefined = void 0;

	  function func() {
	    var d = deferred(),
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

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_8__;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var appendMethods = __webpack_require__(6);

	/**
	 * @access public
	 * chromise.Event class.
	 * @see https://developer.chrome.com/extensions/events
	 * @since 0.1.0
	 */

	var Event =
	/**
	 * @param {Function} deferred - Create a Deferred object.
	 * @param {Function} promise - Create a Promise object.
	 * @param {chrome.Event} event
	 */
	function Event(deferred, promise, event) {
	  _classCallCheck(this, Event);

	  appendMethods(deferred, promise, this, event, ['addListener', 'removeListener', 'hasListener', 'addRules', 'getRules', 'removeRules']);
	};

	module.exports = Event;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Api = __webpack_require__(5),
	    chrome = __webpack_require__(8);

	var Tabs = function (_Api) {
	  _inherits(Tabs, _Api);

	  function Tabs(deferred, promise) {
	    _classCallCheck(this, Tabs);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Tabs).call(this, deferred, promise, chrome.tabs, ['get', 'getCurrent', 'sendRequest', 'sendMessage', 'getSelected', 'getAllInWindow', 'create', 'duplicate', 'query', 'highlight', 'update', 'move', 'reload', 'remove', 'detectLanguage', 'captureVisibleTab', 'executeScript', 'insertCSS', 'setZoom', 'getZoom', 'setZoomSettings', 'getZoomSettings'], ['onCreated', 'onUpdated', 'onMoved', 'onSelectionChanged', 'onActiveChanged', 'onActivated', 'onHighlightChanged', 'onHighlighted', 'onDetached', 'onAttached', 'onRemoved', 'onReplaced', 'onZoomChange']));
	  }

	  return Tabs;
	}(Api);

	module.exports = Tabs;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Api = __webpack_require__(5),
	    chrome = __webpack_require__(8);

	var StorageArea = function (_Api) {
	  _inherits(StorageArea, _Api);

	  function StorageArea(deferred, promise, storage_type) {
	    _classCallCheck(this, StorageArea);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(StorageArea).call(this, deferred, promise, chrome.storage[storage_type], ['get', 'getBytesInUse', 'set', 'remove', 'clear'], []));
	  }

	  return StorageArea;
	}(Api);

	var Storage = function (_Api2) {
	  _inherits(Storage, _Api2);

	  function Storage(deferred, promise) {
	    _classCallCheck(this, Storage);

	    var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(Storage).call(this, deferred, promise, chrome.storage, [], ['onChanged']));

	    var self = _this2;

	    ['sync', 'local', 'managed'].forEach(function (storage_type) {
	      self[storage_type] = new StorageArea(deferred, promise, storage_type);
	    });
	    return _this2;
	  }

	  return Storage;
	}(Api);

	module.exports = Storage;

/***/ }
/******/ ])
});
;