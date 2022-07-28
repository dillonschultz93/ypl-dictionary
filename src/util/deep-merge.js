/* eslint-disable no-param-reassign */
const deepMerge = (target, source) => {
  Object.entries(source).forEach(([key, value]) => {
    if (value && typeof value === 'object' && !Array.isArray(value)) {
      deepMerge((target[key] = target[key] || {}), value);
      return;
    }

    target[key] = value;
  });

  return target;
};

module.exports = deepMerge;
