const getValueFromFlatTokens = (tokens) =>
  Object.entries(tokens)
    .filter(([key]) => key.endsWith('.value'))
    .reduce(
      (acc, [key, val]) => ({
        ...acc,
        [key]: val,
      }),
      {}
    );

module.exports = getValueFromFlatTokens;
