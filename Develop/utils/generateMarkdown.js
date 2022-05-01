// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'None'){
    return '';
  }
  else if (license === 'Unlicensed'){
    return `![https://img.shields.io/badge/License-Unlicensed-lightgrey](https://img.shields.io/badge/License-Unlicensed-lightgrey)`;
  }
  else if (license === 'MIT License'){
    return `![https://img.shields.io/badge/License-MIT-green](https://img.shields.io/badge/License-MIT-green)`;
  }
  else if (license === 'Apache License 2.0'){
    return `![https://img.shields.io/badge/License-Apache_2.0-green](https://img.shields.io/badge/License-Apache_2.0-green)`;
  }
  else if (license === 'ISC License'){
    return `![https://img.shields.io/badge/License-ISC-green](https://img.shields.io/badge/License-ISC-green)`;
  }
  else if (license === 'GNU GPLv3'){
    return `![https://img.shields.io/badge/License-GNU_GPLv3-green](https://img.shields.io/badge/License-GNU_GPLv3-green)`;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'None'){
    return '';
  }
  else if (license === 'Unlicensed'){
    return `[https://choosealicense.com/licenses/unlicense/](https://choosealicense.com/licenses/unlicense/)`;
  }
  else if (license === 'MIT License'){
    return `[https://choosealicense.com/licenses/mit/](https://choosealicense.com/licenses/mit/)`;
  }
  else if (license === 'Apache License 2.0'){
    return `[https://choosealicense.com/licenses/apache-2.0/](https://choosealicense.com/licenses/apache-2.0/)`;
  }
  else if (license === 'ISC License'){
    return `[https://choosealicense.com/licenses/isc/](https://choosealicense.com/licenses/isc/)`;
  }
  else if (license === 'GNU GPLv3'){
    return `[https://choosealicense.com/licenses/gpl-3.0/](https://choosealicense.com/licenses/gpl-3.0/)`;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === 'None'){
    return 'There is currently no license for this project. If you wish to ask to ask the project creator to add a license, please visit the questions section in this file for ways to contact them.'
  }
  else{
    return `This project is current operating under the following license:\n
    ${license}\n 
    You can find more information regarding this license by clicking on the following link:`
  }
}

function printToc(name){
      return `\n- [${name}](${name})\n`;
  }
function printContent(name, input){
      return `\n## ${name}\n\n${input}\n`;
  }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} ${renderLicenseBadge(data.license)} 
  
## Table of Contents

- [Description](#description)
${(data.features !== '') ? printToc('Features') : ''}
- [Installation](#installation)
  
- [Usage](#usage)
${(data.tests !== '') ? printToc('Testing') : ''} ${(data.contributions !== '') ? printToc('Contributing') : ''} ${(data.credits !== '') ? printToc('Credits') : ''}
- [License](#license)

- [Questions](#questions)

## Description

${data.description}
${(data.features !== '') ? printContent('Features', data.features) : ''}
## Installation
  
${data.installation}
  
## Usage
  
${data.usage}
${(data.tests !== '') ? printContent('Testing', data.tests) : ''} ${(data.contributions !== '') ? printContent('Contributing', data.contributions) : ''} ${(data.credits !== '') ? printContent('Credits', data.credits) : ''}
## License

${renderLicenseSection(data.license)}
${renderLicenseLink(data.license)}

## Questions

If you have any questions, you can reach me at my Email:\n
[${data.email}](#${data.email})\n
Or at my github account:\n
[https://github.com/${data.github}](https://github.com/${data.github})

`;
}

module.exports = generateMarkdown;
