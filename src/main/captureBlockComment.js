function captureBlockComment(p) {
  let isEnd = false;
  let init = p.i;
  let i = p.i;
  let str = p.str;

  p.content += str[i];
  i += 1;

  for (; !isEnd && str[i]; i++) {
    isEnd = str[i - 1] + str[i] === '*/';
    p.content += str[i];
  }

  if (!isEnd) {
    while (!isOpenTag(p) && !isClosedTag(p) && i > init) {
      p.content = str.substring(init, i);
      i -= 1;
    }
  }

  p.i = i;
}