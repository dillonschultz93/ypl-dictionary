const { readdirSync } = require('fs');
const { join } = require('path');
const requireAndFlatten = require('./requireAndFlatten');

const getJSON5PathsFromDir = (dir) => readdirSync(dir).filter((file) => file.endsWith('.json5'));

const getRequiredAndFlattenedFiles = (dir) =>
  getJSON5PathsFromDir(dir)
    .map((file) => requireAndFlatten(join(dir, file)))
    .reduce((acc, cur) => ({ ...acc, ...cur }), {});

module.exports = getRequiredAndFlattenedFiles;
