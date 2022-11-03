// Strip the first instance of '_' from the key
const stripFirstUnderscore = (flatTokensObject) => {
  const objectCopy = { ...flatTokensObject };
  const newFlatTokensObject = {};
  Object.keys(objectCopy).forEach((key) => {
    const newKey = key
      .split('.')
      .map((k) => {
        if (k.startsWith('_')) {
          return k.replace('_', '');
        }
        return k;
      })
      .join('.');
    newFlatTokensObject[newKey] = objectCopy[key];
  });
  return newFlatTokensObject;
};

module.exports = stripFirstUnderscore;
