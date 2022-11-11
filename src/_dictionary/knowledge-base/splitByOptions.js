const splitByOptions = (UIDFilteredTokensObject) =>
  Object.entries(UIDFilteredTokensObject)
    .filter(([key]) => key.includes('OPT_'))
    .reduce((acc, [key, value]) => {
      const allKeys = key.split('.');
      const option = allKeys[4];

      return {
        ...acc,
        [option]: {
          ...acc[option],
          [key]: value,
        },
      };
    }, {});

module.exports = splitByOptions;
