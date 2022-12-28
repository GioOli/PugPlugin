// Empty constructor
function PugPlugin() {}

// The function that passes work along to native shells
// Message is a string, duration may be 'long' or 'short'
PugPlugin.prototype.malabarismo = function(message, successCallback, errorCallback) {
  cordova.exec(successCallback, errorCallback, 'PugPlugin', 'malabarismo', message);
}

// Installation constructor that binds ToastyPlugin to window
ToastyPlugin.install = function() {
  if (!window.plugins) {
    window.plugins = {};
  }
  window.plugins.toastyPlugin = new ToastyPlugin();
  return window.plugins.toastyPlugin;
};
cordova.addConstructor(ToastyPlugin.install);