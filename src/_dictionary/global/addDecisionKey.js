// HEADS UP: THIS SCRIPT WILL NEED TO BE DEPRECATED SOON!!!!!!!!

// Add the key 'TKUI_D' to the third position in the key
const addDecisionKey = (flatTokensObject) => {
  const objectCopy = { ...flatTokensObject };
  const newFlatTokensObject = {};
  Object.keys(objectCopy).forEach((key) => {
    // If the key includes 'TKUI_C' or 'TKUI_M', then skip it.
    if (key.includes('TKUI_C') || key.includes('TKUI_M') || key.includes('TKUI_A') || key.includes('CONST')) {
      newFlatTokensObject[key] = objectCopy[key];
    }
    // The the key does not include 'TKUI_C' or 'TKUI_M', then add the key 'TKUI_D' to the third position in the key.
    else {
      const keyArray = key.split('.');
      keyArray.splice(2, 0, 'TKUI_D');
      const newKey = keyArray.join('.');
      newFlatTokensObject[newKey] = objectCopy[key];
    }
  });
  return newFlatTokensObject;
};

module.exports = addDecisionKey;
