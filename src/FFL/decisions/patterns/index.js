const PosterCard = require('./P0001-Poster Card');
const LockupCol = require('./P0003-Lockup Col');
const FlashCard = require('./P0007-Flash Card');
const Navigation = require('./P0009-Navigation');

module.exports = {
  allPatternTokens: {
    ...PosterCard.tokens,
    ...LockupCol.tokens,
    ...FlashCard.tokens,
    ...Navigation.tokens,
  },
  allPatternKBInfo: {
    ...PosterCard.kbInfo,
    ...LockupCol.kbInfo,
    ...FlashCard.kbInfo,
    ...Navigation.kbInfo,
  },
};
