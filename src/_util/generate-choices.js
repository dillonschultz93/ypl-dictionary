/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
const path = require('path');
const _ = require('lodash');
/**
 * Generate choice tokens from the super tokens.
 * @param {Object} superTokensObject - The super tokens object.
 * @param {String} superTokenCategory - The super token category as a string.
 * @returns {Array} An array of objects that contain: the parent (super token category), category, and generated tokens.
 */
const generateChoices = (superTokensObject, superTokenCategory, project) => {
  const choices = [];

  Object.entries(superTokensObject).forEach(([category, value]) => {
    const { apparatusProtocol, options, kingdom } = value;

    // Set the path to the apparatus protocol file.
    const apparatus = require(path.join(__dirname, `../${project}/apparatuses`, apparatusProtocol));

    // Create the tokens object.
    const choiceSet = {
      YPL: {
        [project]: {
          [kingdom]: {
            [superTokenCategory]: {
              [category]: {
                ...apparatus(options),
              },
            },
          },
        },
      },
    };

    // Push the tokens object to the choices array.
    choices.push({ kingdom, category, tokens: _.merge(choiceSet, {}) });
  });

  return choices;
};

module.exports = generateChoices;
