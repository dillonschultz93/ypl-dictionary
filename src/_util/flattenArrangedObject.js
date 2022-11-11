/* eslint-disable camelcase */
const json5 = require('json5');
const { readFileSync } = require('fs');
const { flatten } = require('flat');

const requireJSON5 = (path) => {
  const raw = readFileSync(path, 'utf8');
  return json5.parse(raw);
};

// Get object from the file path.
const getObjectFromPath = (obj) => obj;

// Loop through nested object and find the '$tree' key.
const getTree = (obj) => {
  let tree = null;
  let foundTree = false;
  Object.keys(obj).forEach((key) => {
    if (key === 'TREE') {
      tree = obj[key];
      foundTree = true;
    } else if (typeof obj[key] === 'object' && !foundTree) {
      tree = getTree(obj[key]);
    }
  });
  return tree;
};

// Loop through nested object and find the '$meta' key.
const getMeta = (obj) => {
  let meta = null;
  let foundMeta = false;
  Object.keys(obj).forEach((key) => {
    if (key === 'META') {
      meta = obj[key];
      foundMeta = true;
    } else if (typeof obj[key] === 'object' && !foundMeta) {
      meta = getMeta(obj[key]);
    }
  });
  return meta;
};

// Loop through nested object and find the '$meta' key.
const getOverrides = (obj) => {
  let meta = null;
  let foundMeta = false;
  Object.keys(obj).forEach((key) => {
    if (key === 'OVERRIDES') {
      meta = obj[key];
      foundMeta = true;
    } else if (typeof obj[key] === 'object' && !foundMeta) {
      meta = getOverrides(obj[key]);
    }
  });
  return meta;
};

// const requireAndArrange = (path) => getObjectFromPath(requireJSON5(path));

const arrangeObject = (path) => {
  const object = getObjectFromPath(requireJSON5(path));
  const tree = getTree({ ...object });
  const meta = getMeta({ ...object });
  const overrides = getOverrides({ ...object });

  const { GEN_project, GEN_UID } = meta.GENS;

  return {
    YPL: {
      [GEN_project]: {
        [GEN_UID]: {
          ...tree,
          ...overrides,
        },
      },
    },
  };
};

const flattenArrangedObject = (path) => flatten(arrangeObject(path));

module.exports = flattenArrangedObject;
