module.exports = function isOpenComment(p) {
  return p.str.substring(p.i, p.i + 4) === "<!--";
};