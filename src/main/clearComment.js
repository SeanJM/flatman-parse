module.exports = function clearComment(p) {
  while (p.str.substring(p.i, p.i + 3) !== "-->" && p.str[p.i]) {
    p.content += p.str[p.i];
    p.i += 1;
  }
  while (p.str[p.i] !== ">") {
    p.content += p.str[p.i];
    p.i += 1;
  }
};