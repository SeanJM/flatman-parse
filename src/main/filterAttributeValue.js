function filterAttributeValue(name, value) {
  if (name === 'style') {
    return filterAttributeStyle(value);
  }

  return value;
}