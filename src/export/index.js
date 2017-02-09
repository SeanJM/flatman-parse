if (typeof module === 'object') {
  module.exports = parseHtml;
} else if (flatman) {
  flatman.parse = parseHtml;
}