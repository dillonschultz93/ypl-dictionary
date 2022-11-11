const hasBreakpoints = (UIDFilteredTokensObject) =>
  Object.keys(UIDFilteredTokensObject).some((key) => key.includes('BRKP_'));

module.exports = hasBreakpoints;
