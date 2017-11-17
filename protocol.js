var normalizeProtocols = require('./normalize-protocols');
var proxies = require('./proxy-list');

module.exports = function getProxyForProtocol(protocol) {
  var prots = normalizeProtocols(protocol);
  prots.push('ALL');
  for (var i=0; i<prots.length; i++) {
    var proxy = proxies[prots[i]];
    if (proxy) {
      return proxy;
    }
  }
  return null;
};
