const { readdirSync, readFileSync } = require('fs');
const { join } = require('path');
const json5 = require('json5');

const getJSON5PathsFromDir = (dir) => readdirSync(dir).filter((file) => file === 'KB-info.json5');

const getRequiredKBInfo = (dir) =>
  getJSON5PathsFromDir(dir)
    .map((file) => {
      const raw = readFileSync(join(dir, file), 'utf8');
      return json5.parse(raw);
    })
    .reduce((acc, cur) => ({ ...acc, ...cur }), {});

module.exports = getRequiredKBInfo;
