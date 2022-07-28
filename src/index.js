/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');
const hjson = require('hjson');
const generateTokens = require('./util/generate-tokens');
const writeToJSON = require('./util/write-to-json');

// Read the configuration file.
const config = fs.readFileSync(path.join(__dirname, 'pasta.config.hjson'), 'utf8');

// Parse the configuration file from HJSON → JSON.
const configObj = hjson.parse(config);

// Generate tokens.
const data = generateTokens(configObj);

// Write the tokens to a file.
writeToJSON(data);

console.log('Tokens written to tokens.json');
