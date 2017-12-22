module.exports = function isText(p) {
  return p.str[p.i] !== '<';
};