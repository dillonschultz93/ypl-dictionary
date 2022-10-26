// Add the '.value' key to the end of the key
const addValueKey = (flatTokensObject) => {
  const objectCopy = { ...flatTokensObject };
  const newFlatTokensObject = {};
  Object.keys(objectCopy).forEach((key) => {
    newFlatTokensObject[`${key}.value`] = objectCopy[key];
  });
  return newFlatTokensObject;
};

module.exports = addValueKey;
