/* eslint-disable no-plusplus */
const { program } = require('commander');
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const dec2hex = require('./dex2hex');

// Import templates
const { tokens, meta, index } = require('./templates');

// Create the token directories
const createTokenDirectories = (uid, name, tokenType) => {
  if (
    fs.existsSync(path.join(__dirname, `../tokens/${tokenType}/${uid}-${name.charAt(0).toUpperCase() + name.slice(1)}`))
  ) {
    console.log('Token already exists');
    process.exit(1);
  } else {
    fs.mkdirSync(path.join(__dirname, `../tokens/${tokenType}/${uid}-${name.charAt(0).toUpperCase() + name.slice(1)}`));

    // Create the meta file
    fs.writeFileSync(
      path.join(
        __dirname,
        `../tokens/${tokenType}/${uid}-${name.charAt(0).toUpperCase() + name.slice(1)}/meta${meta(uid, name).extension}`
      ),
      meta(uid, name).content
    );
    // Create the index file
    fs.writeFileSync(
      path.join(
        __dirname,
        `../tokens/${tokenType}/${uid}-${name.charAt(0).toUpperCase() + name.slice(1)}/index${
          index(uid, name).extension
        }`
      ),
      index(uid, name).content
    );
  }
};

// Create token files
const createTokenTemplates = (uid, name, tokenType, variant = false) => {
  // Create the token file
  if (variant) {
    fs.writeFileSync(
      path.join(
        __dirname,
        `../tokens/${tokenType}/${uid}-${name.charAt(0).toUpperCase() + name.slice(1)}/${variant}${
          tokens(uid, variant).extension
        }`
      ),
      tokens(uid, variant).content
    );
  } else {
    fs.writeFileSync(
      path.join(
        __dirname,
        `../tokens/${tokenType}/${uid}-${name.charAt(0).toUpperCase() + name.slice(1)}/${name}${tokens(uid).extension}`
      ),
      tokens(uid).content
    );
  }
};

// eslint-disable-next-line prettier/prettier
program
  .option('-E, --element', 'generate a new element json file')
  .option('-P, --pattern', 'generate a new pattern json file');

program.parse(process.argv);

// If an element option is passed
if (program.opts().element) {
  console.log('🌱 Creating a new element');

  const prompts = [
    {
      type: 'input',
      name: 'getUID',
      message: 'What is the element UID?',
      validate: (value) => {
        if (value.length <= 5 && value.startsWith('E')) {
          return true;
        }
        if (value.length <= 5 && !value.startsWith('E')) {
          return 'UID must start with E';
        }
        if (value.length > 5) {
          return 'UID can only be 5 characters long';
        }

        return 'UID is required';
      },
    },
    {
      type: 'input',
      name: 'getName',
      message: 'What is the element name?',
    },
    {
      type: 'confirm',
      name: 'hasVariants',
      message: 'Does the element have variants?',
      default: false,
    },
  ];

  inquirer.prompt(prompts).then((answers) => {
    const { getUID, getName, hasVariants } = answers;

    // Create the element directory
    createTokenDirectories(getUID, getName, 'elements');

    if (hasVariants) {
      const variantPrompts = [
        {
          type: 'input',
          name: 'getVariantCount',
          message: 'How many variants does the element have?',
          validate: (value) => {
            if (value.length && !Number.isNaN(value)) {
              return true;
            }

            return 'Variant count is required';
          },
        },
      ];

      inquirer.prompt(variantPrompts).then((variantAnswers) => {
        const { getVariantCount } = variantAnswers;
        const variantCount = parseInt(getVariantCount, 10);

        // Variants
        const variants = [];

        for (let i = variantCount; i > 0; i--) {
          variants.push(i);
        }

        variants.sort((a, b) => a - b);

        const hexVariants = variants.map((variant) => dec2hex(variant, 3).toUpperCase());

        hexVariants.forEach((variant) => {
          createTokenTemplates(getUID, getName, 'elements', variant);
        });
      });
    } else {
      // Create the files necessary for the element
      createTokenTemplates(getUID, getName, 'elements');
    }
  });
}

// If a pattern option is passed
if (program.opts().pattern) {
  console.log('🌱 Creating a new pattern');

  const prompts = [
    {
      type: 'input',
      name: 'getUID',
      message: 'What is the pattern UID?',
      validate: (value) => {
        if (value.length <= 5 && value.startsWith('P')) {
          return true;
        }
        if (value.length <= 5 && !value.startsWith('P')) {
          return 'UID must start with P';
        }
        if (value.length > 5) {
          return 'UID can only be 5 characters long';
        }

        return 'UID is required';
      },
    },
    {
      type: 'input',
      name: 'getName',
      message: 'What is the pattern name?',
    },
    {
      type: 'confirm',
      name: 'hasVariants',
      message: 'Does the pattern have variants?',
      default: false,
    },
  ];

  inquirer.prompt(prompts).then((answers) => {
    const { getUID, getName, hasVariants } = answers;

    // Create the element directory
    createTokenDirectories(getUID, getName, 'patterns');

    if (hasVariants) {
      const variantPrompts = [
        {
          type: 'input',
          name: 'getVariantCount',
          message: 'How many variants does the element have?',
          validate: (value) => {
            if (value.length && !Number.isNaN(value)) {
              return true;
            }

            return 'Variant count is required';
          },
        },
      ];

      inquirer.prompt(variantPrompts).then((variantAnswers) => {
        const { getVariantCount } = variantAnswers;
        const variantCount = parseInt(getVariantCount, 10);

        // Variants
        const variants = [];

        for (let i = variantCount; i > 0; i--) {
          variants.push(i);
        }

        variants.sort((a, b) => a - b);

        const hexVariants = variants.map((variant) => dec2hex(variant, 3).toUpperCase());

        hexVariants.forEach((variant) => {
          createTokenTemplates(getUID, getName, 'patterns', variant);
        });
      });
    } else {
      // Create the files necessary for the element
      createTokenTemplates(getUID, getName, 'patterns');
    }
  });
}
