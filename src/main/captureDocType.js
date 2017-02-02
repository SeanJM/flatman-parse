function captureDocType(props) {
  let inner = '';
  let identifiers = [];
  let identifiersString;
  let rootAndType;
  let strChar;

  props.index += 2;

  while (props.string.substring(props.index, props.index + 3) !== '>' && props.string[props.index]) {
    inner += props.string[props.index];
    props.index += 1;

    if ((
      props.string[props.index] === '"'
      || props.string[props.index] === '\''
    ) && !strChar) {
      strChar = props.string[props.index];
      identifiersString = '';
      while (props.string[props.index + 1] !== strChar && props.string[props.index]) {
        props.index += 1;
        identifiersString += props.string[props.index];
      }
      props.index += 1;
      strChar = undefined;
      identifiers.push(identifiersString);
    }
  }

  props.index += 1;
  rootAndType = inner.split(' ');

  props.nodes.push({
    tagName : 'doctype',
    rootElement : rootAndType[1],
    type : rootAndType[2] && rootAndType[2].trim().toLowerCase(),
    publicIdentifier : identifiers[0],
    privateIdentifier : identifiers[1]
  });

  resetCapture(props);
}