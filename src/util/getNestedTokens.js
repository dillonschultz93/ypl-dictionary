const { unflatten } = require('flat');

const getNestedTokens = (tokenset, useArrays) => unflatten(tokenset, { object: !useArrays });

module.exports = getNestedTokens;
