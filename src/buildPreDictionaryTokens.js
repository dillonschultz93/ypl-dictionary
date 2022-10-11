/* eslint-disable no-console */
const fs = require('fs');
const json5 = require('json5');
const path = require('path');
const generateChoices = require('./util/generate-choices');
const writeChoices = require('./util/write-choices');

// Loop through the source directory and get the project names.
fs.readdirSync(path.join(__dirname, '../src'))
  .filter((file) => file !== 'util' && file !== 'buildPreDictionaryTokens.js' && file !== 'index.js') // ⚠️ Update this if any new files or directories that are not project directories are added.
  .forEach((project) => {
    console.log(`Building ${project} choice tokens 🗜`);

    // Loop through all the super tokens and generate tokens for each file found.
    fs.readdirSync(path.resolve(__dirname, `../src/${project}/superTokens`)).forEach((file) => {
      const fileContent = fs.readFileSync(path.resolve(__dirname, `../src/${project}/superTokens`, file), 'utf8');

      if (fileContent) {
        const parsedJSON = json5.parse(fileContent);
        const fileName = path.basename(file, '.super.json5');

        const generatedTokens = generateChoices(parsedJSON, fileName, project);

        // Write the data to a json file.
        writeChoices(generatedTokens, project);
      }
    });
  });
