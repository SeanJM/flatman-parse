function isOpenTag(p) {
  const i = p.i;
  return (
    p.str[i] === '<' &&
    p.str[i + 1] !== '/' &&
    p.str.substring(i, i + 2) !== '<!'
  );
}