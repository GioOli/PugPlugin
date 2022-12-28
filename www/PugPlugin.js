// Empty constructor
function PugPlugin() {}

// The function that passes work along to native shells
// Message is a string, duration may be 'long' or 'short'
PugPlugin.prototype.malabarismo = function(message, successCallback, errorCallback) {
  cordova.exec(successCallback, errorCallback, 'PugPlugin', 'malabarismo', message);
}

// Installation constructor that binds ToastyPlugin to window
PugPlugin.install = function() {
  if (!window.plugins) {
    window.plugins = {};
  }
  window.plugins.PugPlugin = new PugPlugin();
  return window.plugins.PugPlugin;
};
cordova.addConstructor(PugPlugin.install);
