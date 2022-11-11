const hasVariant = (UIDFilteredTokensObject) => Object.keys(UIDFilteredTokensObject).some((key) => key.includes('-'));

module.exports = hasVariant;
