module.exports = function isComment(p) {
  var i = p.i;
  var s = p.str.substring(i, i + 4);
  return s === '<!--';
};