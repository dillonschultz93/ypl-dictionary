const Chip = require('./E0001-Chip'); // E0001
const Thumbnail = require('./E0002-Thumbnail'); // E0002
const Button = require('./E0003-Button'); // E0003
const Switch = require('./E0004-Switch'); // E0004
const Status = require('./E0005-Status'); // E0005

module.exports = {
  allElementTokens: {
    ...Chip.tokens,
    ...Thumbnail.tokens,
    ...Button.tokens,
    ...Switch.tokens,
    ...Status.tokens,
  },
  allElementKBInfo: {
    ...Chip.kbInfo,
    ...Thumbnail.kbInfo,
    ...Button.kbInfo,
    ...Switch.kbInfo,
    ...Status.kbInfo,
  },
};
