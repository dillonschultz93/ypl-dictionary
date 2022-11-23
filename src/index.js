const path = require('path');
const { mkdirSync, readdirSync } = require('fs');
const globalDictionaryWork = require('./_dictionary/global');
const writeKBTokens = require('./_util/output/writeKBTokens');
const writeFigmaTokens = require('./_util/output/writeFigmaTokens');
const writeiOSTokens = require('./_util/output/writeiOSTokens');
const writeAndroidTokens = require('./_util/output/writeAndroidTokens');

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
    const { allTokens, allKBInfo, choices } = projectTokens;
    // eslint-disable-next-line import/no-dynamic-require, global-require
    const configObject = require(`./${project}/_config`);
    const { pastakb, figma, iOS, android } = configObject;

    // Globally transform the tokens
    const globallyTransformedTokens = globalDictionaryWork(allTokens);

    mkdirSync(`./dist/${project}`, { recursive: true });

    // Create platform directories and write the tokens to them
    console.log(`Creating platform directories...`);

    // KNOWLEDGE BASE
    console.log(`Creating knowledge base directory 📁`);
    mkdirSync(`./dist/${project}/knowledge-base`, { recursive: true });
    console.log(`Writing knowledge base tokens 📄`);
    writeKBTokens(project, globallyTransformedTokens, allKBInfo, pastakb, `./dist/${project}/knowledge-base`);

    // FIGMA
    console.log(`Creating Figma directory 📁`);
    mkdirSync(`./dist/${project}/figma`, { recursive: true });
    console.log(`Writing Figma tokens 📄`);
    writeFigmaTokens(project, choices, figma, `./dist/${project}/figma`);

    // iOS
    console.log(`Creating iOS directory 📁`);
    mkdirSync(`./dist/${project}/iOS`, { recursive: true });
    console.log(`Writing iOS tokens 📄`);
    writeiOSTokens(project, globallyTransformedTokens, iOS, `./dist/${project}/iOS`);

    // Android
    console.log(`Creating Android directory 📁`);
    mkdirSync(`./dist/${project}/android`, { recursive: true });
    console.log(`Writing Android tokens 📄`);
    writeAndroidTokens(project, globallyTransformedTokens, android, `./dist/${project}/android`);

    console.log(`Done writing tokens for ${project} 🎉`);
  });
