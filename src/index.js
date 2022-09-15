const { unflatten } = require('flat');
const tokens = require('./tokens');
const getValueFromFlatTokens = require('./util/getValueFromFlatTokens');
const getByPage = require('./util/getByPage');

const getTokens = () => tokens;

const getNestedTokens = (tokenset, useArrays) => unflatten(tokenset, { object: !useArrays });

module.exports = {
  getTokens,
  getValueFromFlatTokens,
  getByPage,
  getNestedTokens,
};
