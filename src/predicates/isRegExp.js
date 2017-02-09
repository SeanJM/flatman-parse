function isRegExp(p) {
  var p1 = p.str[p.i];
  var p2 = p.str[p.i + 1];

  var i = p.i;
  var str = p.str;

  return (
    p1 === '/'
    && (
      str[i - 1] === '('
      || str[i - 1] === '='
      || str[i - 1] === ' ' && str[i - 2] === '='
    )
  );
}