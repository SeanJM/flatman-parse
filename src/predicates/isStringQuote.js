function isStringQuote(p) {
  var str = p.str[p.i];
  var before = p.str[p.i - 1];

  return (
    str === '\'' || str === '"' || str === '`'
  ) && !IS_LETTER[before];
}