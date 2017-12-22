module.exports = function clearTag(p) {
  let i = p.i;
  let str = p.str;

  while (str.substring(i, i + 2) !== ">" && str[i]) {
    i += 1;
    p.content += str[i];
  }

  p.i = i;
};