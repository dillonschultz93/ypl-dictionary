const choices = require('./choices');
const decisions = require('./decisions');

module.exports = {
  allTokens: {
    ...choices,
    ...decisions.allTokens,
  },
  allKBInfo: {
    ...decisions.allKBInfo,
  },
  choices,
};
