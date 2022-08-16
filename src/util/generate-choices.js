/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
const path = require('path');
const _ = require('lodash');
/**
 * Generate choice tokens from the super tokens.
 * @param {*} superTokensObject - The super tokens object.
 */
const generateChoices = (superTokensObject, superTokenCategory) => {
  const choices = [];

  Object.entries(superTokensObject).forEach(([category, value]) => {
    const { apparatusProtocol, tokenset, options, kingdom } = value;
    const apparatus = require(path.join(__dirname, '../apparatuses', apparatusProtocol));

    const choiceSet = {
      [kingdom]: {
        [superTokenCategory]: {
          [category]: {
            tokenset,
            ...apparatus(options),
          },
        },
      },
    };

    choices.push({ parent: superTokenCategory, category, tokens: _.merge(choiceSet, {}) });
  });

  return choices;
};

module.exports = generateChoices;
