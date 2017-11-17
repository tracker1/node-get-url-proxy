module.exports = function normalizeProtocols(protocol) {
  var prot = String(protocol || 'HTTP').trim().toUpperCase().replace(/[\:\/]+$/, '');
  switch (prot) {
    case 'HTTP': return ['HTTP', 'HTTPS'];
    case 'HTTPS': return ['HTTPS', 'HTTP'];
    case 'WS': return ['WS', 'WSS', 'HTTPS', 'HTTP'];
    case 'WSS': return ['WSS', 'WS', 'HTTPS', 'HTTP'];
    case 'SFTP': return ['SFTP', 'SSH'];
    default: return [prot];
  }
}
