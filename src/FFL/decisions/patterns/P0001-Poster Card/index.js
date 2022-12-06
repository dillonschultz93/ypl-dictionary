const getRequiredAndFlattenedAndArrangedFiles = require('../../../../_util/getRequiredAndFlattenedAndArrangedFiles');
const getRequiredKBInfo = require('../../../../_util/getRequiredKBInfo');

module.exports = {
  tokens: getRequiredAndFlattenedAndArrangedFiles(__dirname),
  kbInfo: getRequiredKBInfo(__dirname),
};
