function isOpenTag(str, i) {
  return (
    str[i] === '<' &&
    str[i + 1] !== '/' &&
    str.substring(i, i + 4) !== '<!--'
  );
}