module.exports = function isRegExp(p) {
  var p1  = p.str[p.i];
  var i   = p.i;
  var str = p.str;

  return (
    p1 === '/'
    && (
      str[i - 1] === '('
      || str[i - 1] === '='
      || str[i - 1] === ' ' && str[i - 2] === '='
    )
  );
};