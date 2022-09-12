const getByPage = (tokens, UID) =>
  Object.entries(tokens)
    .filter(([key]) => key.includes(UID))
    .reduce(
      (acc, [key, val]) => ({
        ...acc,
        [key]: val,
      }),
      {}
    );

module.exports = getByPage;
