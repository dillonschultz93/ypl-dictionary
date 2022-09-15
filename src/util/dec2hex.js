module.exports = (number, places) => {
  const hex = number.toString(16);
  const padding = places ? '000000'.substring(0, places - hex.length) : '';
  return padding + hex;
};
