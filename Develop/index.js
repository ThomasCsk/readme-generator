// TODO: Include packages needed for this application

const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'name',
    message: 'What is your name? (Required)',
    validate: nameInput => {
      if (nameInput) {
        return true;
      } else {
        console.log('Please enter your name!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is your GitHub Username? (Required)',
    validate: githubInput => {
      if (githubInput) {
        return true;
      } else {
        console.log('Please enter your GitHub Username!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'project',
    message: 'What is the title of this Project? (Required)',
    validate: projectInput => {
      if (projectInput) {
        return true;
      } else {
        console.log('Please enter your Project title!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please provide a short description explaining the reasoning behind this project. (Required)',
    validate: descriptionInput => {
      if (descriptionInput) {
        return true;
      } else {
        console.log('Please enter a description for this project!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'features',
    message: 'If there are a lot of features that need to be discussed in detail, you can do so here.',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Please provide a short description explaining the steps required to install your project. (Required)',
    validate: installationInput => {
      if (installationInput) {
        return true;
      } else {
        console.log('Please enter a description on installation for this project!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Please provide a short description explaining how to use this project. (Required)',
    validate: usageInput => {
      if (usageInput) {
        return true;
      } else {
        console.log('Please enter a description for how to use this project!');
        return false;
      }
    }
  },
  {
    type: 'checkbox',
    name: 'license',
    message: 'Please choose from the following list what kind of license you want this project to have.(Required)',
    choices: ['None','Unlicense','Boost Software License 1.0','MIT License','Apache License 2.0','Mozilla Public License 2.0','GNU LGPLv3','GNU GPLv3','GNU AGPLv3'],
    validate: licenseInput => {
      if (licenseInput) {
        return true;
      } else {
        console.log('Please choose a license for this project! (Choose none if you do not want to add a license at this time)');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'credits',
    message: 'If you would like, you can use this section to thank collaborators and add links to their GitHub accounts, link and credit and third party applications that were used in this project, and give links to any tutorials that may have been used.',

  },
  {
    type: 'input',
    name: 'contributions',
    message: 'It you would like, you can include guidelines here that will explain to other developers exactly how to help work on and contribute to this project.',
  },

  {
    type: 'input',
    name: 'tests',
    message: 'If you would like to include tests, please do so here along with instructions on how to run them.',
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions);
}

// Function call to initialize app
init();
