// Add the key 'TKUI_D' to the third position in the key
const addDecisionKey = (flatTokensObject) => {
  const objectCopy = { ...flatTokensObject };
  const newFlatTokensObject = {};
  Object.keys(objectCopy).forEach((key) => {
    const newKey = key
      .split('.')
      .map((k, i) => {
        if (i === 2) {
          return `TKUI_D.${k}`;
        }
        return k;
      })
      .join('.');
    newFlatTokensObject[newKey] = objectCopy[key];
  });
  return newFlatTokensObject;
};

module.exports = addDecisionKey;
