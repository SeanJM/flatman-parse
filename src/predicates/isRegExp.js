function isRegExp(p) {
  const p1 = p.str[p.i];
  const p2 = p.str[p.i + 1];

  const i = p.i;
  const str = p.str;

  return (
    p1 === '/'
    && (
      str[i - 1] === '('
      || str[i - 1] === '='
      || str[i - 1] === ' ' && str[i - 2] === '='
    )
  );
}