const { readdirSync } = require('fs');
const { join } = require('path');
const flattenArrangeObject = require('./flattenArrangedObject');

const getJSON5PathsFromDir = (dir) => readdirSync(dir).filter((file) => file.endsWith('.json5'));

const getRequiredAndFlattenedFiles = (dir) =>
  getJSON5PathsFromDir(dir)
    .map((file) => flattenArrangeObject(join(dir, file)))
    .reduce((acc, cur) => ({ ...acc, ...cur }), {});

module.exports = getRequiredAndFlattenedFiles;
