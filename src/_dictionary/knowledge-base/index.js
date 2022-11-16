// const { writeFileSync } = require('fs');
const getUIDs = require('./getUIDs');
const getTokensByUID = require('./getTokensByUID');
const hasVariants = require('./hasVariants');
const hasOptions = require('./hasOptions');
const hasBreakpoints = require('./hasBreakpoints');
const splitByVariant = require('./splitByVariant');
const splitByOption = require('./splitByOptions');
const splitByBreakpoint = require('./splitByBreakpoints');

const knowledgeBaseDictionaryWork = (allTokensObject, allKBInfoObject) => {
  // Collect all UIDs
  const uids = getUIDs(allKBInfoObject);

  const KB_TOKENS = uids.reduce((acc, UID) => {
    const tokens = getTokensByUID(allTokensObject, UID);
    const KBInfo = allKBInfoObject[UID];

    // Check if the tokens have options, variants, or breakpoints
    const hasOptionsBool = hasOptions(tokens);
    const hasVariantsBool = hasVariants(tokens);
    const hasBreakpointsBool = hasBreakpoints(tokens);

    return {
      ...acc,
      [UID]: {
        allTokens: tokens,
        meta: KBInfo,
        variants: hasVariantsBool ? splitByVariant(tokens) : null,
        options: hasOptionsBool ? splitByOption(tokens) : null,
        breakpoints: hasBreakpointsBool ? splitByBreakpoint(tokens) : null,
      },
    };
  }, {});

  return KB_TOKENS;
};

module.exports = knowledgeBaseDictionaryWork;
