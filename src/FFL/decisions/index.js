const elements = require('./elements');
const patterns = require('./patterns');
const primitives = require('./primitives');

module.exports = {
  allTokens: {
    ...primitives,
    ...elements.allElementTokens,
    ...patterns.allPatternTokens,
  },
  allKBInfo: {
    ...elements.allElementKBInfo,
    ...patterns.allPatternKBInfo,
  },
};
