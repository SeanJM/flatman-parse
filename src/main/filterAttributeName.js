module.exports = function filterAttributeName(name) {
  return name === "class"
    ? "className"
    : name;
};