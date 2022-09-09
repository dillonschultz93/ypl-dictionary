/* eslint-disable no-console */
const fs = require('fs');
const json5 = require('json5');
const path = require('path');
const generateChoices = require('./util/generate-choices');
const writeChoices = require('./util/write-choices');

// Loop through all the super tokens and generate tokens for each file found.
fs.readdirSync(path.resolve(__dirname, '../src/superTokens')).forEach((file) => {
  const fileContent = fs.readFileSync(path.resolve(__dirname, '../src/superTokens', file), 'utf8');

  if (fileContent) {
    const parsedJSON = json5.parse(fileContent);
    const fileName = path.basename(file, '.super.json5');

    const generatedTokens = generateChoices(parsedJSON, fileName);

    // Write the data to a json file.
    writeChoices(generatedTokens);
  }
});
