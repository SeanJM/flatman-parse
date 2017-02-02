function isOpenTag(props) {
  return (
    props.string[props.index] === '<' &&
    props.string[props.index + 1] !== '/' &&
    props.string.substring(props.index, props.index + 2) !== '<!'
  );
}