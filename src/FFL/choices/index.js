const getRequiredAndFlattenedFiles = require('../../_util/getRequiredAndFlattenedFiles');
const TKUI_A = require('./TKUI_A');
const TKUI_C = require('./TKUI_C');
const TKUI_M = require('./TKUI_M');
// Importing in global constants
const CONST = require('../../_constants');

// Get any files in the current directory, require and flatten them
const currentDir = getRequiredAndFlattenedFiles(__dirname);

module.exports = {
  ...TKUI_A,
  ...TKUI_C,
  ...currentDir, // Any files in the current directory
  ...TKUI_M,
  ...CONST, // Global constants
};
