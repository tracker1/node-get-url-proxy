module.exports = Object.keys(process.env)
  .filter(function(k) {
    return (/_proxy$/i).test(k);
  }).map(function(k) {
    return [k.toUpperCase().replace(/_proxy$/i, ''), process.env[k]]
  }).reduce(function(a, p) {
    a[p[0]] = p[1];
    return a
  }, {});
