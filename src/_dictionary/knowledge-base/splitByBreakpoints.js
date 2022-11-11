const splitByBreakpoints = (UIDFilteredTokensObject) =>
  Object.entries(UIDFilteredTokensObject)
    .filter(([key]) => key.includes('BRKP_'))
    .reduce((acc, [key, value]) => {
      const allKeys = key.split('.');
      const breakpoint = allKeys[allKeys.length - 2];

      return {
        ...acc,
        [breakpoint]: {
          ...acc[breakpoint],
          [key]: value,
        },
      };
    }, {});

module.exports = splitByBreakpoints;
