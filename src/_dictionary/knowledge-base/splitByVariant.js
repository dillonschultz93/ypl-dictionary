const splitByVariant = (UIDFilteredTokensObject) =>
  Object.entries(UIDFilteredTokensObject)
    .filter(([key]) => key.includes('-'))
    .reduce((acc, [k, value]) => {
      const allKeys = k.split('.');
      const variant = allKeys[3].split('-')[1];

      return {
        ...acc,
        [variant]: {
          ...acc[variant],
          [k]: value,
        },
      };
    }, {});

module.exports = splitByVariant;
