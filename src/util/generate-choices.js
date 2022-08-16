/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
const path = require('path');

/**
 * Generate choice tokens from the super tokens.
 * @param {*} superTokensObject - The super tokens object.
 */
const generateTokens = (superTokensObject) => {
  const { projects } = superTokensObject;
  // const { nomenclatureOptions } = configuration;

  const tokens = [];

  projects.forEach((project) => {
    const { superChoices, name } = project;

    Object.entries(superChoices).forEach(([superChoiceCategory, superChoiceCategoryValue]) => {
      let categoryTokens = {};

      Object.entries(superChoiceCategoryValue).forEach(([choiceCategory, config]) => {
        const { apparatusProtocol, options, kingdom, tokenset } = config;

        if (apparatusProtocol === null) {
          // const key = `${nomenclatureOptions.namespace}`;
          const tokenSet = {
            [kingdom]: {
              [superChoiceCategory]: {
                [choiceCategory]: {
                  tokenset,
                  ...structuredClone(options),
                },
              },
            },
          };

          categoryTokens = deepMerge(tokenSet, {});
        } else {
          const apparatus = require(path.join(__dirname, '../apparatuses', apparatusProtocol));

          // const key = `${nomenclatureOptions.namespace}`;
          const tokenSet = {
            [kingdom]: {
              [superChoiceCategory]: {
                [choiceCategory]: {
                  tokenset,
                  ...apparatus(options),
                },
              },
            },
          };

          categoryTokens = deepMerge(tokenSet, {});
        }

        tokens.push({ project: name, parent: superChoiceCategory, category: choiceCategory, tokens: categoryTokens });
      });
    });
  });

  return tokens;
};

module.exports = generateTokens;
