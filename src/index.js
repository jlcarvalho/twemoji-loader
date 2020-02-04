const twemoji = require("twemoji");
const loaderUtils = require("loader-utils");

const defaultOptions = {};

module.exports = function EmojiReplaceLoader(source) {
  const options = loaderUtils.getOptions(this);

  return twemoji.parse(source, Object.assign({}, defaultOptions, options));
};
