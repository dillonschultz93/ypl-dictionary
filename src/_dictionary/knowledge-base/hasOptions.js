const hasOptions = (UIDFilteredTokensObject) =>
  Object.keys(UIDFilteredTokensObject).some((key) => key.includes('OPT_'));

module.exports = hasOptions;
