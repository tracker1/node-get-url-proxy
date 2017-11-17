var normalizeProtocols = require('./normalize-protocols');

module.exports = function getProxyForProtocol(protocol) {
  var prots = normalizeProtocols(protocol);
  prots.push('ALL');
  for (var i=0; i<prots.length; i++) {
    var prot = prots[i];
    if (process.env[prot + '_PROXY']) {
      return process.env[prot + '_PROXY'];
    }
    if (process.env[prot.toLowerCase() + '_proxy']) {
      return process.env[prot.toLowerCase() + '_proxy'];
    }
  }
  return null;
};
