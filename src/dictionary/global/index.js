const addValueKey = require('./addValueKey');
const deleteDepthKey = require('./deleteDepthKey');
const stripFirstUnderscore = require('./stripFirstUnderscore');

const globalDictionaryWork = (flatTokens) => {
  // Delete the depth key
  const deletedDepthKey = deleteDepthKey(flatTokens);

  // Add the '.value' key to the end of the key
  const valueKeyAdded = addValueKey(deletedDepthKey);

  // Strip the first instance of '_' from the key
  const firstUnderscoreStripped = stripFirstUnderscore(valueKeyAdded);

  return firstUnderscoreStripped;
};

module.exports = globalDictionaryWork;
