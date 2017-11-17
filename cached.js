var getProxy = require('./index');
var URL = require('./url');
var cache = {};
var cacheKeys = [];
var maxCache = 1000;

module.exports = function getCachedProxy(resource) {
  var url = new URL(resource);
  var origin = url.origin;
  if (cache[origin]) {
    return cache[origin];
  }
  var ret = getProxy(resource);
  cache[origin] = ret;
  while (cacheKeys.length > maxCache) {
    var key = cacheKeys.shift();
    delete cache[key];
  }
  return ret;
}