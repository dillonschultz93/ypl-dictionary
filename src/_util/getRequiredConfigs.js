const { readdirSync, readFileSync } = require('fs');
const { join } = require('path');
const json5 = require('json5');

const getJSON5PathsFromDir = (dir) => readdirSync(dir).filter((file) => file.endsWith('.config.json5'));

const getRequiredConfigs = (dir) =>
  getJSON5PathsFromDir(dir)
    .map((file) => {
      const raw = readFileSync(join(dir, file), 'utf-8');
      return json5.parse(raw);
    })
    .reduce((acc, cur) => ({ ...acc, ...cur }), {});

module.exports = getRequiredConfigs;
