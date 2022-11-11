const getTokensByUID = (allTokensObject, UID) =>
  Object.entries(allTokensObject)
    .filter(([key]) => key.includes(UID))
    .reduce(
      (acc, [key, val]) => ({
        ...acc,
        [key]: val,
      }),
      {}
    );

module.exports = getTokensByUID;
