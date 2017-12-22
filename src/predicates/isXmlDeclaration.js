module.exports = function isXmlDeclaration(p) {
  var i = p.i;

  var s = p.str
    .substring(i, i + 6)
    .toLowerCase();

  return s === '<?xml ';
};