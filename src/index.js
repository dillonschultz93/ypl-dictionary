const path = require('path');
const { mkdirSync, writeFileSync, readdirSync } = require('fs');
const getValueFromFlatTokens = require('./util/getValueFromFlatTokens');
const getTokens = require('./util/getTokens');
const getPageInfo = require('./util/getPageInfo');
const getNestedTokens = require('./util/getNestedTokens');

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

    console.log(`Creating knowledge base directory 📁`);
    mkdirSync(`./dist/${project}/knowledge-base`, { recursive: true });
    // mkdirSync(`./dist/${project}/iOS`, { recursive: true });
    // mkdirSync(`./dist/${project}/Android`, { recursive: true });
    // mkdirSync(`./dist/${project}/figma`, { recursive: true });

    // Write tokens to each platform directory
    // KNOWLEDGE BASE

    // Write nested json tokens
    console.log(`Writing knowledge base tokens 📝`);
    writeFileSync(
      `./dist/${project}/knowledge-base/tokens.json`,
      JSON.stringify(getTokens(getNestedTokens(tokens, true)), null, 2)
    );

    // Write flat json tokens
    console.log(`Writing knowledge base flat tokens 📝`);
    writeFileSync(
      `./dist/${project}/knowledge-base/flat-tokens.json`,
      JSON.stringify(getValueFromFlatTokens(tokens), null, 2)
    );

    // Write page info object
    console.log(`Writing knowledge page info 📝`);
    writeFileSync(
      `./dist/${project}/knowledge-base/pageInfo.json`,
      JSON.stringify(getPageInfo(getNestedTokens(tokens, true)), null, 2)
    );
  });
