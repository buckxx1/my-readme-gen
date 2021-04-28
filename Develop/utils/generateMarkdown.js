// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = licenseName => {
  if (!licenseName) {
    return '';
  }
  if (licenseName.includes('MIT')) {
    licenseName = 'MIT';
  }
  if (licenseName.includes('GNU')) {
    licenseName = 'GNU_General_Public_v3.0';
  }
  if (licenseName.includes('Mozilla')) {
    licenseName = 'Mozilla_Public_2.0';
  }
  if (licenseName.includes('Unlicense')) {
    licenseName = 'The Unlicense';
  }
  return `
![license](https://img.shields.io/badge/License-${licenseName}-blue)`
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const generateLicense = LicenseText => {
  if (!LicenseText) {
    return '';
  }
  return `# License 
${badgesText}  
  `;
}
// Making a features section
const generateFeatures = featuresText => {
  if (!featuresText) {
    return '';
  }
  return `# features
 ${featuresText} 
  `;
}
// table of contents section 
const tableOfContentsLicense = license => {
  if (!license) {
    return '';
  }
  return `* [License](#license)`
}
const tableOfContentsBadges = badges => {
  if (!badges) {
    return '';
  }
  return `* [Badges](#badges)`
}
const tableOfContentsFeatures = features => {
  if (!features) {
    return '';
  }
  return `* [Features](#features)`
}
const tableOfContentsContributing = contributing => {
  if (!contributing) {
    return '';
  }
  return `* [Contributing](#contributing)`
}



// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const tableOfContentsLicense = license => {
  if (!license) {
    return '';
  }
  return `# [License](#license)`
}

// TODO: Create a function to generate markdown for README
module.exports = generateMarkdown => {
  const { projectName, description, installation, usage, credits, github, email, ...notRequired } = generateMarkdown;
  //console.log(generateMarkdown);

  return `# ${projectName}
    ${renderLicenseBadge(notRequired.license)}

${description}

${generateTableOfContents(notRequired.confirmTableOfContents)}
${tableOfContentsLicense(notRequired.license)}
${tableOfContentsBadges(notRequired.badges)}
${tableOfContentsFeatures(notRequired.features)}
${tableOfContentsContributing(notRequired.contributing)}
${tableOfContentsTests(notRequired.tests)}

# Installation

${installation}

# Usage 

${usage}

# Credits

${credits}

# Questions

[Contact Me](${email})

[GitHub](https://github.com/${github})

${generateLicense(notRequired.license)}
${generateBadges(notRequired.badges)}
${generateFeatures(notRequired.features)}
${generateContributing(notRequired.contributing)}
${generateTests(notRequired.tests)}
`;
}