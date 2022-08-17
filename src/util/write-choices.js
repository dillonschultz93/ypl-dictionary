const fs = require('fs');
const path = require('path');

const writeChoices = (choices) => {
  choices.forEach((choice) => {
    const { parent, category, tokens } = choice;

    fs.mkdirSync(path.join(__dirname, `../../src/tokens/choices/${parent}`), { recursive: true });

    fs.writeFileSync(
      path.join(__dirname, `../../src/tokens/choices/${parent}/${category}.tokens.json5`),
      JSON.stringify(tokens, null, 2),
      'utf-8'
    );
  });
};

module.exports = writeChoices;
