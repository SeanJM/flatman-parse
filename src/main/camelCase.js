module.exports = function camelCase(str) {
  var split = str.split('-');
  for (var i = 0, n = split.length; i < n; i++) {
    if (i === 0) {
      split[i] = split[i].toLowerCase();
    } else {
      split[i] = split[i][0].toUpperCase() + split[i].slice(1).toLowerCase();
    }
  }

  return split.join('');
};