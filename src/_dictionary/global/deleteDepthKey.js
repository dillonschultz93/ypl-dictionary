// Delete the 'DEPTH' key from the given object.
// TODO: THIS SCRIPT SHOULD BE DEPRECATED SOON.
const deleteDepthKey = (flatTokensObject) => {
  const objectCopy = { ...flatTokensObject };

  Object.keys(objectCopy).forEach((key) => {
    if (key.includes('DEPTH')) {
      delete objectCopy[key];
    }
  });

  return objectCopy;
};

module.exports = deleteDepthKey;
