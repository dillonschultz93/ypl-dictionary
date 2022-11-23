const { writeFileSync } = require('fs');
const iOSDictionaryWork = require('../../_dictionary/iOS');
const createHeader = require('./createHeader');

const writeiOSTokens = (project, tokens, configObject, path) => {
  const header = createHeader(project, configObject, 'iOS');
  const iOSTokens = iOSDictionaryWork(tokens);
  const { fileNamePrefix } = configObject.outputFile;

  const output = {
    _header: header,
    _tokens: iOSTokens,
  };

  writeFileSync(`${path}/${fileNamePrefix}.json`, JSON.stringify(output, null, 2));
};

module.exports = writeiOSTokens;
