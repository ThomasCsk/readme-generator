// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require("fs");

const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input', // Name Question
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
    type: 'input', // GitHub Question
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
    type: 'input', // Email Question
    name: 'email',
    message: 'What is your Email Address? (Required)',
    validate: emailInput => {
      if (emailInput) {
        return true;
      } else {
        console.log('Please enter your Email Address!');
        return false;
      }
    }
  },
  {
    type: 'input', // Project Title Question
    name: 'title',
    message: 'What is the title of this Project? (Required)',
    validate: titleInput => {
      if (titleInput) {
        return true;
      } else {
        console.log('Please enter your Project title!');
        return false;
      }
    }
  },
  {
    type: 'input', // Project Description Question
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
    type: 'input', // Features Question
    name: 'features',
    message: 'If there are a lot of features that need to be discussed in detail, you can do so here. (Optional)',
  },
  {
    type: 'input', // Installation Question
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
    type: 'input', // Usage Question
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
    type: 'list', // License Question
    name: 'license',
    message: 'Please choose from the following list what kind of license you want this project to have.(Required)',
    choices: ['None','Unlicensed','MIT License','Apache License 2.0', 'ISC License', 'GNU GPLv3'],
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
    type: 'input',  // Credits Question
    name: 'credits',
    message: 'If you would like, you can use this section to thank collaborators and add links to their GitHub accounts, link and credit and third party applications that were used in this project, and give links to any tutorials that may have been used. (Optional)',

  },
  {
    type: 'input', // Contributions Question
    name: 'contributions',
    message: 'If you would like, you can include guidelines here that will explain to other developers exactly how to help work on and contribute to this project. (Optional)',
  },

  {
    type: 'input', // Tests Question
    name: 'tests',
    message: 'If you would like to include tests, please do so here along with instructions on how to run them. (Optional)',
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFile(`./${fileName}.md`, data, err => {
    if(err) console.log(err);
    else console.log('file was created');
  });
}


var readmeTitle = ''; // Variable used to name the README file the same as the project name
// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions) //prompts the user for inputs to questions above
   .then((answers) => {
     readmeTitle = answers.title // asigns the project title to the readme title
     return generateMarkdown(answers); // generates the markdown file using the anwers to the prompts
   })
  .then((content) => {
    writeToFile(readmeTitle, content) // makes the file using the information returned from the generateMarkdown function and the name of the project
  })
  .catch(err => {
    console.log(err); // logs an error if something doesnt work
  });
}
 
  
// Function call to initialize app
init()
  
  
  