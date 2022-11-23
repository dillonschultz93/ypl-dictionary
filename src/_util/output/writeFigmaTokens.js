const { writeFileSync } = require('fs');
const figmaDictionaryWork = require('../../_dictionary/figma');
// const createHeader = require('./createHeader');

const writeFigmaTokens = (project, tokens, configObject, path) => {
  const FigmaTokens = figmaDictionaryWork(tokens, project);
  const { fileNamePrefix } = configObject.outputFile;

  const output = {
    ...FigmaTokens,
  };

  writeFileSync(`${path}/${fileNamePrefix}.json`, JSON.stringify(output, null, 2));
};

module.exports = writeFigmaTokens;
