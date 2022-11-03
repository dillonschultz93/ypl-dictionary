const _ = require('lodash');
// const deepmerge = require('../../util/deep-merge');

/**
 * @description Calculates the geometric scale.
 * @param {Number} base - The base value.
 * @param {Number} ratio - The ratio value.
 * @param {Number} baseIndex - The base index.
 * @param {Number} currentIndex - The current index.
 * @returns {Number} The geometric scale value.
 */
function geoA(base, ratio, baseIndex, currentIndex) {
  return Math.round(base * ratio ** ((200 + currentIndex - baseIndex) / 100));
}

/**
 * @description Calculates the geometric scale.
 * @param {Number} base - The base value.
 * @param {Number} baseIndex - The base index.
 * @param {Number} currentIndex - The current index.
 * @returns {Number} The arithmetic scale value.
 */
function arithA(base, ratio, currentIndex) {
  return base + ratio * (currentIndex / 100 - 1);
}

/**
 * @description Calculates the geometric scale.
 * @param {Number} base - The base value.
 * @param {Number} ratio - The ratio value.
 * @param {Number} currentIndex - The current index.
 * @returns {Number} The arithmetic scale value.
 */
function arithB(base, ratio, currentIndex) {
  return base + 30 + ratio * 8 * (currentIndex / 100 - 1);
}

/**
 * @description Generates geometric and arithmetic scale tokens.
 * @param {*} optionsObject - Object containing the options from the dimension super token configuration.
 * @returns {Object} The generated scale tokens.
 */
const generateDimensionScale = (optionsObject) => {
  // Set the min and max amount of exposed indexes.
  const min = 100;
  let max = 1100;

  let val = {};

  // Loop through the options object
  Object.entries(optionsObject).forEach(([key, v]) => {
    // Collect keys and values
    const { value } = v;
    const { base, ratio, baseIndex } = value;

    // Set the max amount of exposed indexes.
    if (key === 'arithA') {
      max = 4000;
    } else if (key === 'arithB') {
      max = 6300;
    }

    // Loop through the exposed indexes
    for (let index = min; index < max + 1; index += 100) {
      let scaleValue = 0;

      switch (key) {
        case 'geoA':
          scaleValue = geoA(base, ratio, baseIndex, index);

          // Add the scale value to the object.
          val = _.merge(
            {
              ...val,
              [key]: {
                [index]: scaleValue,
              },
            },
            { ...val }
          );
          break;

        case 'arithA':
          scaleValue = arithA(base, ratio, index);

          // Add the scale value to the object.
          val = _.merge(
            {
              ...val,
              [key]: {
                [index]: scaleValue,
              },
            },
            { ...val }
          );
          break;

        case 'arithB':
          scaleValue = arithB(base, ratio, index);

          // Add the scale value to the object.
          val = _.merge(
            {
              ...val,
              [key]: {
                [index]: scaleValue,
              },
            },
            { ...val }
          );
          break;

        default:
          break;
      }
    }
  });

  return val;
};

module.exports = generateDimensionScale;
