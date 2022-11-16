const path = require('path');
const { mkdirSync, readdirSync } = require('fs');
const globalDictionaryWork = require('./_dictionary/global');
const writeKBTokens = require('./_util/output/writeKBTokens');

// Create the dist folder and write the tokens to it
mkdirSync('./dist', { recursive: true });

// Loop through the project directories and write the tokens to a json file.
readdirSync(path.join(__dirname, '../src'))
  .filter(
    (file) =>
      file !== '_util' &&
      file !== 'buildPreDictionaryTokens.js' &&
      file !== 'index.js' &&
      file !== 'applyOverrides.js' &&
      file !== '_dictionary' &&
      file !== '_constants'
  ) // ⚠️ Update this if any new files or directories that are not project directories are added.);\
  .forEach((project) => {
    console.log(`Building ${project} tokens 🏗`);

    // eslint-disable-next-line import/no-dynamic-require, global-require
    const projectTokens = require(`./${project}`);
    // eslint-disable-next-line import/no-dynamic-require, global-require
    const configObject = require(`./${project}/_config`);

    // Globally transform the tokens
    const globallyTransformedTokens = globalDictionaryWork(projectTokens.allTokens);

    mkdirSync(`./dist/${project}`, { recursive: true });

    // Create platform directories
    console.log(`Creating platform directories...`);

    console.log(`Creating knowledge base directory 📁`);
    mkdirSync(`./dist/${project}/knowledge-base`, { recursive: true });

    // Write tokens to json files

    // KNOWLEDGE BASE
    writeKBTokens(
      project,
      globallyTransformedTokens,
      projectTokens.allKBInfo,
      configObject.pastakb,
      `./dist/${project}/knowledge-base`
    );
  });
