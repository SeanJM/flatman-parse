module.exports = function filterAttributeStyle(style) {
  var obj = {};
  var each = style.split(';');
  var styleTemp;

  for (var i = 0, n = each.length; i < n; i++) {
    if (each[i].length) {
      styleTemp = each[i].split(':');
      obj[camelCase(styleTemp[0].trim())] = styleTemp.slice(1, n).join(':').trim();
    }
  }

  return obj;
};