const path = require('path');
const { mkdirSync, writeFileSync, readdirSync } = require('fs');
// const getValueFromFlatTokens = require('./util/getValueFromFlatTokens');
// const getTokens = require('./util/getTokens');
// const getPageInfo = require('./util/getPageInfo');
// const getNestedTokens = require('./util/getNestedTokens');
// const tokens = require('./FFL/tokens');

// console.log(JSON.stringify(tokens, null, 2));

// Create the dist folder and write the tokens to it
mkdirSync('./dist', { recursive: true });

// Loop through the project directories and write the tokens to a json file.
readdirSync(path.join(__dirname, '../src'))
  .filter((file) => file !== 'util' && file !== 'buildPreDictionaryTokens.js' && file !== 'index.js') // ⚠️ Update this if any new files or directories that are not project directories are added.);\
  .forEach((project) => {
    console.log(`Building ${project} tokens 🏗`);

    // eslint-disable-next-line import/no-dynamic-require, global-require
    const tokens = require(`./${project}/tokens`);

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
    writeFileSync(`./dist/${project}/iOS/tokens.json`, JSON.stringify(tokens, null, 2));
  });
