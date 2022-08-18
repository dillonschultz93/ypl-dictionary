const unflatten = (flatObject) => {
  if (Object(flatObject) !== flatObject || Array.isArray(flatObject)) return flatObject;

  const regex = /\.?([^.[\]]+)|\[(\d+)\]/g;
  const output = {};

  Object.keys(flatObject).forEach((key) => {
    let current = output;
    let property = '';
    let m;

    while (m === regex.exec(key)) {
      current = current[property] || (current[property] = m[2] ? [] : {});
      property = m[2] || m[1];
    }

    current[property] = flatObject[key];
  });

  return output[''] || output;
};

module.exports = unflatten;
