function isSrc(url) {
  return url.indexOf('http') === 0 || url.indexOf('data:image') === 0 || url.indexOf('//') === 0
}

module.exports = {
  isSrc: isSrc
}