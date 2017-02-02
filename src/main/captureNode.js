function captureNode(props) {
  var capture = true;
  var innerTag = '';
  var node;

  // Get inner tag
  props.open += 1;
  props.index += 1;

  while (props.string[props.index] !== '>' && props.string[props.index]) {
    innerTag += props.string[props.index];
    props.index += 1;
  }

  props.index += 1;

  if (innerTag[props.index - 3] === '/') {
    node = getNode(innerTag.substring(0, innerTag.length - 1));
    capture = false;
    props.nodes.push(node);
    reset(props);
  } else {
    node = getNode(innerTag);
  }

  innerTag = '';

  if (isSelfClosingTag(node.tagName)) {
    capture = false;
    props.nodes.push(node);
    reset(props);
  }

  while (props.index < props.length && capture) {
    if (isOpenAndClosed(props.string, props.index)) {
      props.open += 1;
      props.closed += 1;
    } else if (isOpenTag(props.string, props.index)) {
      props.open += 1;
    } if (isClosedTag(props.string, props.index)) {
      props.closed += 1;
    }

    if (props.open - props.closed === 0) {
      node.childNodes = parse(props.content);
      props.nodes.push(node);

      // Go to the end of the closed tag
      while (props.string[props.index] !== '>' && props.string[props.index]) {
        props.index += 1;
      }

      reset(props);
      capture = false;
    }

    if (props.open > props.closed) {
      props.content += props.string[props.index];
    }

    props.index += 1;
  }
}