let childlen_params = {};
[
  'spokenFeedback', 'largeCursor', 'stickyKeys', 'highContrast',
  'screenMagnifier', 'autoclick', 'virtualKeyboard', 'animationPolicy'
].forEach(children_name => {
  childlen_params[children_name] = [['get', 'set', 'clear']];
});

module.exports = [[], [], childlen_params];
