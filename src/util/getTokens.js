const getTokens = (tokens) => {
  const tokensCopy = { ...tokens };

  Object.keys(tokensCopy).forEach((key) => {
    if (key !== 'YPL') {
      delete tokensCopy[key];
    }
  });

  return tokensCopy;
};

module.exports = getTokens;
