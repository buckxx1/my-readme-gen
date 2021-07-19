// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const licenseBadge = {
  ['MIT']: ['yellow', 'https://opensource.org/licenses/MIT'],
  ['Boost']: ['red', 'https://opensource.org/licenses/EPL-1.0'],
  ['Apache']: ['blue', 'https://opensource.org/licenses/Apache-2.0'],
  ['GNU']: ['blue', 'https://www.gnu.org/licenses/gpl-3.0'],
  ['Creative Commons']: ['lightgray', 'http://creativecommons.org/publicdomain/zero/1.0/'],
  ['Eclipes']: ['red', 'https://opensource.org/licenses/EPL-1.0'],
  ['ISC']: ['blue', 'https://opensource.org/licenses/ISC'],
  ['Mozilla Public License 2.0']: ['brightgreen', 'https://opensource.org/licenses/MPL-2.0'],
  ['Unlicense']: ['blue', 'http://unlicense.org/'],
}

function renderLicenseBadge(license) {
  return licenseBadge[license];
}
function renderLicenseTrim(license) {
  return (license).replace(/ /g, '');
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
   return `
  # ${answers.title}

  ---

  ## Description
  ${answers.description}

  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contribution)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation
  ${answers.installation}

  ## Usage
  ${answers.usage}

  ## Constributing
  ${answers.contribution}

  ## Tests
  ${answers.tests}

  ## License
  ${answers.license}
  
  [![License](https://img.shields.io/badge/License-${renderLicenseTrim(answers.license)}-${renderLicenseBadge(answers.license)[0]})](${renderLicenseBadge(answers.license)[1]})

  ## Questions
  Email me or reach out on GitHub with any questions

  GitHub Username: ${answers.githubUsername}

  Email Address: ${answers.email}
`;
}

module.exports = generateMarkdown;
