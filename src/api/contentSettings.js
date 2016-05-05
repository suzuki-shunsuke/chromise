let childlen_params = {};
[
  'cookies', 'images', 'javascript', 'location', 'plugins', 'popups',
  'notifications', 'fullscreen', 'mouselock', 'unsandboxedPlugins',
  'automaticDownloads'
].forEach(child_name => {
  childlen_params[child_name] = [
    ['clear', 'get', 'set', 'getResourceIdentifiers']
  ];
});

module.exports = [[], [], childlen_params];
