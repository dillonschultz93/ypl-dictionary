const Chip = require('./E0001-Chip');
const Switch = require('./E0004-Switch');

module.exports = {
  allElementTokens: {
    ...Chip.tokens,
    ...Switch.tokens,
  },
  allElementKBInfo: {
    ...Chip.kbInfo,
    ...Switch.kbInfo,
  },
};
