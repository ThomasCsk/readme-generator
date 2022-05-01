// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return '';
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
