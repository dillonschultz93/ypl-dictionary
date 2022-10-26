const { readdirSync } = require('fs');
const { join } = require('path');
const requireAndArrange = require('./flattenArrangedObject');

const getJSON5PathsFromDir = (dir) => readdirSync(dir).filter((file) => file.endsWith('.json5'));

const getRequiredAndArrangedFiles = (dir) =>
  getJSON5PathsFromDir(dir)
    .map((file) => requireAndArrange(join(dir, file)))
    .reduce((acc, cur) => ({ ...acc, ...cur }), {});

module.exports = getRequiredAndArrangedFiles;
