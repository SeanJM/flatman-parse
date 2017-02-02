function isClosedTag(props) {
  const s = props.string.substring(props.index, props.index + 2);
  return s === '</' || s === '/>';
}