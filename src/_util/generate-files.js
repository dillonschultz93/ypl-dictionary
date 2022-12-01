/* eslint-disable no-plusplus */
const { program } = require('commander');
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const dec2hex = require('./dec2hex');

// Import templates
const { tokens, meta, index } = require('./templates');

// Get project directories
const getProjectDirectories = () => {
  const projects = fs
    .readdirSync(path.join(__dirname, '../../src'))
    .filter(
      (file) =>
        file !== '_util' &&
        file !== '_constants' &&
        file !== '_dictionary' &&
        file !== 'applyOverrides.js' &&
        file !== 'buildPreDictionaryTokens.js' &&
        file !== 'index.js'
    ); // ⚠️ Update this if any new files or directories that are not project directories are added.

  return projects;
};

// Create the token directories
const createTokenDirectories = (uid, name, tokenType, project) => {
  // Check if the project directory exists
  if (!fs.existsSync(path.join(__dirname, `../${project}`))) {
    console.log("Project directory doesn't exist");
    process.exit(1);
  }
  // Check if the token directory exists
  if (
    fs.existsSync(
      path.join(
        __dirname,
        `../${project}/decisions/${tokenType}/${uid}-${name.charAt(0).toUpperCase() + name.slice(1)}`
      )
    )
  ) {
    console.log('Token already exists');
    process.exit(1);
  } else {
    fs.mkdirSync(
      path.join(
        __dirname,
        `../${project}/decisions/${tokenType}/${uid}-${name.charAt(0).toUpperCase() + name.slice(1)}`
      )
    );

    // Create the meta file
    fs.writeFileSync(
      path.join(
        __dirname,
        `../${project}/decisions/${tokenType}/${uid}-${name.charAt(0).toUpperCase() + name.slice(1)}/KB-info${
          meta(uid, name).extension
        }`
      ),
      meta(uid, name).content
    );
    // Create the index file
    fs.writeFileSync(
      path.join(
        __dirname,
        `../${project}/decisions/${tokenType}/${uid}-${name.charAt(0).toUpperCase() + name.slice(1)}/index${
          index(uid, name).extension
        }`
      ),
      index(uid, name).content
    );
  }
};

// Create token files
const createTokenTemplates = (uid, name, tokenType, project, variant = false) => {
  // Create the token file
  if (variant) {
    fs.writeFileSync(
      path.join(
        __dirname,
        `../${project}/decisions/${tokenType}/${uid}-${name.charAt(0).toUpperCase() + name.slice(1)}/${variant}${
          tokens(uid, variant).extension
        }`
      ),
      tokens(uid, name, project, variant).content
    );
  } else {
    fs.writeFileSync(
      path.join(
        __dirname,
        `../${project}/decisions/${tokenType}/${uid}-${name.charAt(0).toUpperCase() + name.slice(1)}/001${
          tokens(uid).extension
        }`
      ),
      tokens(uid, name, project).content
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
      type: 'list',
      name: 'project',
      message: 'Which project is this element for?',
      choices: getProjectDirectories(),
    },
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
    const { project, getUID, getName, hasVariants } = answers;

    // Create the element directory
    createTokenDirectories(getUID, getName, 'elements', project);

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
          createTokenTemplates(getUID, getName, 'elements', project, variant);
        });
      });
    } else {
      // Create the files necessary for the element
      createTokenTemplates(getUID, getName, 'elements', project);
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
