/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');

const writeChoices = (choices, project) => {
  // Loop through the choices array.
  choices.forEach((choice) => {
    const { kingdom, category, tokens } = choice;

    // Make the path to the choices file.
    fs.mkdirSync(path.join(__dirname, `../../src/${project}/choices/${kingdom}`), { recursive: true });

    // Write the choices file.
    console.log(`Writing ${category} choice tokens 💾`);

    fs.writeFileSync(
      path.join(__dirname, `../../src/${project}/choices/${kingdom}/${category}.tokens.json5`),
      JSON.stringify(tokens, null, 2),
      'utf-8'
    );

    console.log(`Done writing ${category} choice tokens ✅`);
  });
};

module.exports = writeChoices;
