/* eslint-disable no-underscore-dangle */
const stripKey = (tokenObject, keyToStrip) => {
  const _object = { ...tokenObject };

  Object.keys(_object).forEach((key) => {
    if (typeof _object[key] === 'object') {
      const nestedObject = _object[key];

      Object.keys(nestedObject).forEach((nestedKey) => {
        if (nestedKey === keyToStrip) {
          delete _object[key][nestedKey];
        } else {
          stripKey(nestedObject, keyToStrip);
        }
      });
    }
  });

  return _object;
};

module.exports = stripKey;
