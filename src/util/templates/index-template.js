module.exports = () => ({
  content: `const getRequiredAndFlattenedFiles = require('../../../util/getRequiredAndFlattenedFiles');

module.exports = getRequiredAndFlattenedFiles(__dirname);

`,
  extension: '.js',
});
