module.exports = function isBlockComment(p) {
  var i = p.i;
  var str = p.str;
  return str[i] + str[i + 1] === '/*';
};