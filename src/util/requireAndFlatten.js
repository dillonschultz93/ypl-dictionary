const json5 = require('json5');
const { readFileSync } = require('fs');

const requireJSON5 = (path) => {
  const raw = readFileSync(path, 'utf8');
  return json5.parse(raw);
};

const getFlattened = (obj, prefix = '') =>
  Object.keys(obj).reduce((acc, k) => {
    const pre = prefix.length ? `${prefix}.` : '';
    if (typeof obj[k] === 'object') Object.assign(acc, getFlattened(obj[k], pre + k));
    else acc[pre + k] = obj[k];
    return acc;
  }, {});

const requireAndFlatten = (path) => getFlattened(requireJSON5(path));

module.exports = requireAndFlatten;
