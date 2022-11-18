const Chip = require('./E0001-Chip');
const Thumbnail = require('./E0002-Thumbnail');
const Switch = require('./E0004-Switch');

module.exports = {
  allElementTokens: {
    ...Chip.tokens,
    ...Thumbnail.tokens,
    ...Switch.tokens,
  },
  allElementKBInfo: {
    ...Chip.kbInfo,
    ...Thumbnail.kbInfo,
    ...Switch.kbInfo,
  },
};
