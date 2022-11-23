const { writeFileSync } = require('fs');
const androidDictionaryWork = require('../../_dictionary/android');
const createHeader = require('./createHeader');

const writeAndroidTokens = (project, tokens, configObject, path) => {
  const header = createHeader(project, configObject, 'Android');
  const iOSTokens = androidDictionaryWork(tokens);
  const { fileNamePrefix } = configObject.outputFile;

  const output = {
    _header: header,
    _tokens: iOSTokens,
  };

  writeFileSync(`${path}/${fileNamePrefix}.json`, JSON.stringify(output, null, 2));
};

module.exports = writeAndroidTokens;
