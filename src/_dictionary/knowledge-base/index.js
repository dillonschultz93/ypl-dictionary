const { writeFileSync } = require('fs');
const getUIDs = require('./getUIDs');
const getTokensByUID = require('./getTokensByUID');
const hasVariants = require('./hasVariants');
const hasOptions = require('./hasOptions');
const hasBreakpoints = require('./hasBreakpoints');
const splitByVariant = require('./splitByVariant');
const splitByOption = require('./splitByOptions');
const splitByBreakpoint = require('./splitByBreakpoints');

const knowledgeBaseDictionaryWork = (allTokensObject, allKBInfoObject, path) => {
  // Collect all UIDs
  const uids = getUIDs(allKBInfoObject);

  // Loop through all UIDs
  uids.forEach((UID) => {
    const tokens = getTokensByUID(allTokensObject, UID);
    const KBInfo = allKBInfoObject[UID];

    // Check if the tokens have options, variants, or breakpoints
    const hasOptionsBool = hasOptions(tokens);
    const hasVariantsBool = hasVariants(tokens);
    const hasBreakpointsBool = hasBreakpoints(tokens);

    // Write the kb data files to the path provided as the final argument.
    writeFileSync(
      `${path}/${UID}.json`,
      JSON.stringify(
        {
          allTokens: tokens,
          meta: KBInfo,
          variants: hasVariantsBool ? splitByVariant(tokens) : null,
          options: hasOptionsBool ? splitByOption(tokens) : null,
          breakpoints: hasBreakpointsBool ? splitByBreakpoint(tokens) : null,
        },
        null,
        2
      )
    );
  });
};

module.exports = knowledgeBaseDictionaryWork;
