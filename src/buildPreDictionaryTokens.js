/* eslint-disable no-console */
const fs = require('fs');
const json5 = require('json5');
const path = require('path');
const generateChoices = require('./_util/generate-choices');
const writeChoices = require('./_util/write-choices');

// Loop through the source directory and get the project names.
fs.readdirSync(path.join(__dirname, '../src'))
  .filter(
    (file) =>
      file !== '_util' &&
      file !== 'buildPreDictionaryTokens.js' &&
      file !== 'index.js' &&
      file !== 'applyOverrides.js' &&
      file !== '_dictionary' &&
      file !== '_constants'
  ) // ⚠️ Update this if any new files or directories that are not project directories are added.
  .forEach((project) => {
    console.log(`Building ${project} choice tokens 🗜`);

    if (fs.existsSync(path.resolve(__dirname, `../src/${project}/choices/_supers/`))) {
      // Loop through all the super tokens and generate tokens for each file found.
      fs.readdirSync(path.resolve(__dirname, `../src/${project}/choices/_supers/`)).forEach((file) => {
        const fileContent = fs.readFileSync(
          path.resolve(__dirname, `../src/${project}/choices/_supers/`, file),
          'utf8'
        );

        if (fileContent) {
          const parsedJSON = json5.parse(fileContent);
          const fileName = path.basename(file, '.super.json5');

          const generatedTokens = generateChoices(parsedJSON, fileName, project);

          // Write the data to a json file.
          writeChoices(generatedTokens, project);
        }
      });
    }
  });
