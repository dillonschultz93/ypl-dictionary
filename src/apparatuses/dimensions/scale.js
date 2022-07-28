const deepmerge = require('../../util/deep-merge');

/**
 * @description Calculates the geometric scale.
 * @param {Number} base - The base value.
 * @param {Number} ratio - The ratio value.
 * @param {Number} baseIndex - The base index.
 * @param {Number} currentIndex - The current index.
 * @returns {Number}
 */
function geoA(base, ratio, baseIndex, currentIndex) {
  return Math.round(base * ratio ** ((200 + currentIndex - baseIndex) / 100));
}

/**
 * @description Calculates the geometric scale.
 * @param {Number} base - The base value.
 * @param {Number} baseIndex - The base index.
 * @param {Number} currentIndex - The current index.
 * @returns {Number}
 */
function arithA(base, ratio, currentIndex) {
  return base + ratio * (currentIndex / 100 - 1);
}

/**
 * @description Calculates the geometric scale.
 * @param {Number} base - The base value.
 * @param {Number} ratio - The ratio value.
 * @param {Number} currentIndex - The current index.
 * @returns {Number}
 */
function arithB(base, ratio, currentIndex) {
  return base + 30 + ratio * 8 * (currentIndex / 100 - 1);
}

const generateDimensionScale = (optionsObject) => {
  // Set the min and max amount of exposed indexes.
  const min = 100;
  let max = 1100;

  let val = {};

  Object.entries(optionsObject).forEach(([key, v]) => {
    const { value, category, description, UIDs, dictionary } = v;
    const { base, ratio, baseIndex } = value;

    if (key === 'arithA') {
      max = 4000;
    } else if (key === 'arithB') {
      max = 6300;
    }

    for (let index = min; index < max + 1; index += 100) {
      let scaleValue = 0;

      switch (key) {
        case 'geoA':
          scaleValue = geoA(base, ratio, baseIndex, index);

          val = deepmerge(
            {
              ...val,
              [key]: {
                [index]: {
                  value: scaleValue,
                  category,
                  description,
                  UIDs,
                  dictionary,
                },
              },
            },
            { ...val }
          );
          break;

        case 'arithA':
          scaleValue = arithA(base, ratio, index);

          val = deepmerge(
            {
              ...val,
              [key]: {
                [index]: {
                  value: scaleValue,
                  category,
                  description,
                  UIDs,
                  dictionary,
                },
              },
            },
            { ...val }
          );
          break;

        case 'arithB':
          scaleValue = arithB(base, ratio, index);

          val = deepmerge(
            {
              ...val,
              [key]: {
                [index]: {
                  value: scaleValue,
                  category,
                  description,
                  UIDs,
                  dictionary,
                },
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
