const { writeFileSync } = require('fs');
const knowledgeBaseDictionaryWork = require('../../_dictionary/knowledge-base');
const createHeader = require('./createHeader');

const writeKBTokens = (project, tokens, KBInfo, configObject, path) => {
  const header = createHeader(project, configObject, 'Pasta Knowledge Base');
  const KBTokens = knowledgeBaseDictionaryWork(tokens, KBInfo);
  const { fileNamePrefix } = configObject.outputFile;

  const output = {
    _header: header,
    _tokens: KBTokens,
  };

  writeFileSync(`${path}/${fileNamePrefix}.json`, JSON.stringify(output, null, 2));
};

module.exports = writeKBTokens;
