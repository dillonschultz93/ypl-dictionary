const { transform } = require('@divriots/style-dictionary-to-figma');
const stripKey = require('./src/util/strip-key');

module.exports = {
  format: {
    figmaTokensPlugin: ({ dictionary }) => {
      const transformedTokens = transform(dictionary.tokens);
      const strippedTokens = stripKey(transformedTokens, 'tokenset');

      return JSON.stringify(strippedTokens, null, 2);
    },
    stripTokenSetKey: ({ dictionary }) => {
      const strippedTokens = stripKey(dictionary.tokens, 'tokenset');

      return JSON.stringify(strippedTokens, null, 2);
    },
    // customFormat({ dictionary, options }) {
    //   let tokens = {};

    //   dictionary.allTokens.forEach((token) => {
    //     let value = JSON.stringify(token.value);
    //     // new option added to decide whether or not to output references
    //     if (options.outputReferences) {
    //       // the `dictionary` object now has `usesReference()` and
    //       // `getReferences()` methods. `usesReference()` will return true if
    //       // the value has a reference in it. `getReferences()` will return
    //       // an array of references to the whole tokens so that you can access
    //       // their names or any other attributes.
    //       if (dictionary.usesReference(token.original.value)) {
    //         const refs = dictionary.getReferences(token.original.value);
    //         refs.forEach((ref) => {
    //           value = value.replace(ref.value, () => `${ref.name}`);
    //         });
    //       }
    //     }

    //     console.log(token);

    //     tokens = {
    //       ...tokens,
    //       [token.name]: {
    //         value: token.original.value,
    //       },
    //     };
    //   });

    //   return JSON.stringify(tokens, null, 2);
    // },
  },

  // FFL project sources
  source: ['src/tokens/FFL/**/*.tokens.json'],
  platforms: {
    resolved_json: {
      buildPath: 'dist/FFL/',
      files: [
        {
          destination: 'tokens.resolved.json',
          format: 'stripTokenSetKey',
        },
      ],
    },
    flat_json: {
      buildPath: 'dist/FFL/',
      transformGroup: 'js',
      files: [
        {
          destination: 'tokens.flat.json',
          format: 'json/flat',
        },
      ],
    },
    // raw_json: {
    //   buildPath: 'dist/',
    //   files: [
    //     {
    //       destination: 'tokens.raw.json',
    //       format: 'customFormat',
    //       options: {
    //         outputReferences: true,
    //       },
    //     },
    //   ],
    // },
    figma: {
      buildPath: 'dist/FFL/',
      files: [
        {
          destination: 'tokens.figma.json',
          format: 'figmaTokensPlugin',
        },
      ],
    },
  },
};
