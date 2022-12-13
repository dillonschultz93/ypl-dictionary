const PosterCard = require('./P0001-Poster Card');
const Cardlet = require('./P0002-Cardlet');
const LockupCol = require('./P0003-Lockup Col');
const FlashCard = require('./P0007-Flash Card');
const Navigation = require('./P0009-Navigation');
const Header = require('./P000A-Header');
const Toast = require('./P000B-Toast');

module.exports = {
  allPatternTokens: {
    ...PosterCard.tokens,
    ...Cardlet.tokens,
    ...LockupCol.tokens,
    ...FlashCard.tokens,
    ...Navigation.tokens,
    ...Header.tokens,
    ...Toast.tokens,
  },
  allPatternKBInfo: {
    ...PosterCard.kbInfo,
    ...Cardlet.kbInfo,
    ...LockupCol.kbInfo,
    ...FlashCard.kbInfo,
    ...Navigation.kbInfo,
    ...Header.kbInfo,
    ...Toast.kbInfo,
  },
};
