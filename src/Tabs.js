let Api = require('./Api');


class Tabs extends Api {
  constructor(deferred, promise) {
    super(
      deferred, promise, chrome.tabs, [
        'get',
        'getCurrent',
        'sendRequest',
        'sendMessage',
        'getSelected',
        'getAllInWindow',
        'create',
        'duplicate',
        'query',
        'highlight',
        'update',
        'move',
        'reload',
        'remove',
        'detectLanguage',
        'captureVisibleTab',
        'executeScript',
        'insertCSS',
        'setZoom',
        'getZoom',
        'setZoomSettings',
        'getZoomSettings',
      ], [
        'onCreated',
        'onUpdated',
        'onMoved',
        'onSelectionChanged',
        'onActiveChanged',
        'onActivated',
        'onHighlightChanged',
        'onHighlighted',
        'onDetached',
        'onAttached',
        'onRemoved',
        'onReplaced',
        'onZoomChange',
      ]
    );
  }
};


module.exports = Tabs;
