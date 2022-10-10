const { unflatten } = require('flat');
const tokens = require('./tokens');
const getValueFromFlatTokens = require('./util/getValueFromFlatTokens');
const getByPage = require('./util/getByPage');

const getTokens = () => tokens;

const getNestedTokens = (tokenset, useArrays) => unflatten(tokenset, { object: !useArrays });

// TODO: This is where we will call the dictionary scripts.

module.exports = {
  getTokens,
  getValueFromFlatTokens,
  getByPage,
  getNestedTokens,
};
