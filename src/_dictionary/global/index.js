const addValueKey = require('./addValueKey');
const deleteDepthKey = require('./deleteDepthKey');
const stripFirstUnderscore = require('./stripFirstUnderscore');
const addDecisionKey = require('./addDecisionKey');

const globalDictionaryWork = (flatTokens) => {
  // Delete the depth key
  const deletedDepthKey = deleteDepthKey(flatTokens);

  // Add the '.value' key to the end of the key
  const valueKeyAdded = addValueKey(deletedDepthKey);

  // Strip the first instance of '_' from the key
  const firstUnderscoreStripped = stripFirstUnderscore(valueKeyAdded);

  // Add the key 'TKUI_D' to the third position in the key
  const decisionKeyAdded = addDecisionKey(firstUnderscoreStripped);

  return decisionKeyAdded;
};

module.exports = globalDictionaryWork;
