function isLineComment(p) {
  const i = p.i;
  const str = p.str;
  return str[i] + str[i + 1] === '//';
}