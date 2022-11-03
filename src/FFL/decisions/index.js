const elements = require('./elements');
const patterns = require('./patterns');
const primitives = require('./primitives');

module.exports = {
  ...primitives,
  ...elements,
  ...patterns,
};
