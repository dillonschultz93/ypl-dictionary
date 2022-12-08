const PosterCard = require('./P0001-Poster Card');
const LockupCol = require('./P0003-Lockup Col');
const FlashCard = require('./P0007-Flash Card');

module.exports = {
  allPatternTokens: {
    ...PosterCard.tokens,
    ...LockupCol.tokens,
    ...FlashCard.tokens,
  },
  allPatternKBInfo: {
    ...PosterCard.kbInfo,
    ...LockupCol.kbInfo,
    ...FlashCard.kbInfo,
  },
};
