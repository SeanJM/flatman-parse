function parse(str) {
  var props = {
    content : '',
    string : str,
    index : 0,
    anchor : 0,
    open : 0,
    closed : 0,
    length : str.length,
    nodes : []
  };

  for (; props.index < props.length; props.index++) {
    if (!isSpace(props.string[props.index])) {
      if (isOpenTag(props.string, props.index)) {
        captureNode(props);
      } else if (isText(props.string, props.index)) {
        captureText(props);
      }
    }
  }

  return props.nodes;
}