const PosterCard = require('./P0001-Poster Card');
const LockupCol = require('./P0003-Lockup Col');

module.exports = {
  allPatternTokens: {
    ...PosterCard.tokens,
    ...LockupCol.tokens,
  },
  allPatternKBInfo: {
    ...PosterCard.kbInfo,
    ...LockupCol.kbInfo,
  },
};
