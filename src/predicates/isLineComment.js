function isLineComment(p) {
  var i = p.i;
  var str = p.str;
  return str[i] + str[i + 1] === '//';
}