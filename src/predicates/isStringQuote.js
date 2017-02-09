function isStringQuote(p) {
  var str = p.str[p.i];
  return str === '\'' || str === '"' || str === '`';
}