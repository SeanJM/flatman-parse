const resetCapture = require("./resetCapture");

module.exports = function captureComment(p) {
  var children = "";

  p.i += 4;

  while (
    p.str.substring(p.i, p.i + 3) !== "-->"
    && p.str[p.i]
  ) {
    children += p.str[p.i];
    p.i += 1;
  }

  p.i += 3;

  p.nodes.push({
    tagName    : "comment",
    children : children.split("\n")
  });

  resetCapture(p);
};