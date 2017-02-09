function isDocType(p) {
  var i = p.i;
  var s = p.str
    .substring(i, i + 9)
    .toLowerCase();
  return s === '<!doctype';
}