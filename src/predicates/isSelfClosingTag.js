function isSelfClosingTag(tagName) {
  return (
    tagName === 'input' ||
    tagName === 'hr' ||
    tagName === 'br'
  );
}