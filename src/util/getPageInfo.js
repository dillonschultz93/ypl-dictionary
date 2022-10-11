const getPageInfo = (tokens) => {
  const tokensCopy = { ...tokens };

  Object.keys(tokensCopy).forEach((key) => {
    if (key !== 'pageInfo') {
      delete tokensCopy[key];
    }
  });

  return tokensCopy;
};

module.exports = getPageInfo;
