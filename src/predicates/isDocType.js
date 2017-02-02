function isDocType(props) {
  const s = props.string
    .substring(props.index, props.index + 9)
    .toLowerCase();
  return s === '<!doctype';
}