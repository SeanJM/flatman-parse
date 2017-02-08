function isStringQuote(p) {
  const str = p.str[p.i];
  return str === '\'' || str === '"' || str === '`';
}