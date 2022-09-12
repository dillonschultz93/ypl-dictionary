const { unflatten } = require('flat');
const tokens = require('./tokens');
const getValueFromFlatTokens = require('./util/getValueFromFlatTokens');
const getByPage = require('./util/getByPage');

const getFlattened = () => tokens;

const getMerged = () => unflatten(tokens, { object: true });

module.exports = {
  getFlattened,
  getValueFromFlatTokens,
  getByPage,
  getMerged,
};
