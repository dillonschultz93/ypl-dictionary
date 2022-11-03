const path = require('path');
const { mkdirSync, writeFileSync, readdirSync } = require('fs');
const globalDictionaryWork = require('./dictionary/global');
const iOSDictionaryWork = require('./dictionary/iOS');

// Create the dist folder and write the tokens to it
mkdirSync('./dist', { recursive: true });

// Loop through the project directories and write the tokens to a json file.
readdirSync(path.join(__dirname, '../src'))
  .filter(
    (file) =>
      file !== 'util' &&
      file !== 'buildPreDictionaryTokens.js' &&
      file !== 'index.js' &&
      file !== 'applyOverrides.js' &&
      file !== 'dictionary'
  ) // ⚠️ Update this if any new files or directories that are not project directories are added.);\
  .forEach((project) => {
    console.log(`Building ${project} tokens 🏗`);

    // eslint-disable-next-line import/no-dynamic-require, global-require
    const tokens = require(`./${project}`);

    // Globally transform the tokens
    const globallyTransformedTokens = globalDictionaryWork(tokens);

    mkdirSync(`./dist/${project}`, { recursive: true });

    // Create platform directories
    console.log(`Creating platform directories 📁`);

    // console.log(`Creating knowledge base directory 📁`);
    // mkdirSync(`./dist/${project}/knowledge-base`, { recursive: true });

    console.log(`Creating iOS directory 📁`);
    mkdirSync(`./dist/${project}/iOS`, { recursive: true });

    // console.log(`Creating Android directory 📁`);
    // mkdirSync(`./dist/${project}/Android`, { recursive: true });

    // console.log(`Creating Figma directory 📁`);
    // mkdirSync(`./dist/${project}/figma`, { recursive: true });

    // Write tokens to json files

    // KNOWLEDGE BASE

    // iOS
    // Transform global tokens with iOS dictionary scripts.
    const iOSFlatTokens = iOSDictionaryWork(globallyTransformedTokens);
    writeFileSync(`./dist/${project}/iOS/tokens.json`, JSON.stringify(iOSFlatTokens, null, 2));
  });
