module.exports = function resetCapture(p) {
  p.open    = 0;
  p.closed  = 0;
  p.anchor  = p.i + 1;
  p.content = "";
};