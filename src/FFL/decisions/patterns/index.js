const PosterCard = require('./P0001-Poster Card');
const Cardlet = require('./P0002-Cardlet');
const LockupCol = require('./P0003-Lockup Col');
const FlashCard = require('./P0007-Flash Card');
const Navigation = require('./P0009-Navigation');
const Header = require('./P000A-Header');
const Toast = require('./P000B-Toast');
const ActionBar = require('./P000E-Action Bar');
const TabBar = require('./P000F-Tab Bar');
const Cluster = require('./P0012-Cluster');
const Tabs = require('./P0013-Tabs');
const WidgetCard = require('./P001F-Widget Card');
const StickyAction = require('./P0020-Sticky Action');

module.exports = {
  allPatternTokens: {
    ...PosterCard.tokens,
    ...Cardlet.tokens,
    ...LockupCol.tokens,
    ...FlashCard.tokens,
    ...Navigation.tokens,
    ...Header.tokens,
    ...Toast.tokens,
    ...ActionBar.tokens,
    ...TabBar.tokens,
    ...Cluster.tokens,
    ...Tabs.tokens,
    ...WidgetCard.tokens,
    ...StickyAction.tokens,
  },
  allPatternKBInfo: {
    ...PosterCard.kbInfo,
    ...Cardlet.kbInfo,
    ...LockupCol.kbInfo,
    ...FlashCard.kbInfo,
    ...Navigation.kbInfo,
    ...Header.kbInfo,
    ...Toast.kbInfo,
    ...ActionBar.kbInfo,
    ...TabBar.kbInfo,
    ...Cluster.kbInfo,
    ...Tabs.kbInfo,
    ...WidgetCard.kbInfo,
    ...StickyAction.kbInfo,
  },
};
