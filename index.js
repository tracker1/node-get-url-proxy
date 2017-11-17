var noProxy = require('no-proxy');
var URL = require('./url');
var protocolProxy = require('./protocol');

module.exports = function getProxy(resource) {
  var url = new URL(resource);
  if (noProxy(url)) {
    return null;
  }
  return protocolProxy(url.protocol);
};