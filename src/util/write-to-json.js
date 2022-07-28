const fs = require('fs');
const path = require('path');

const writeToJSON = (data) => {
  data.forEach((token) => {
    const { project, parent, category, tokens } = token;

    fs.mkdirSync(path.resolve(`src/tokens/${project}`), { recursive: true }, (err) => {
      if (err) throw err;
    });

    fs.mkdirSync(path.resolve(`src/tokens/${project}/${parent}`), { recursive: true }, (err) => {
      if (err) throw err;
    });

    fs.writeFileSync(
      path.resolve(`src/tokens/${project}/${parent}/${category}.tokens.json`),
      JSON.stringify(tokens, null, 2),
      'utf8'
    );
  });
};

module.exports = writeToJSON;
