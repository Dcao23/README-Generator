// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license == 'Apache 2.0') {
        return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
    }
    if (license == 'MIT') {
        return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
    } else {
        return '';
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license !== 'None') {
        return `* [License](#License)`;
    }
    return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    console.log('error');
    if (license !== 'None') {
        return `# License This project is licensed under the ${license} license`;
    }
    return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Description ${data.Description}
  ## Table of Contents
  ${renderLicenseLink(data.license)}
  ## Installation
  ${data.Installation}
  ## Usage
  ${data.Usage}
  ## Contributing
  ${data.Contributing}
  ${renderLicenseSection(data.license)}
  ## Tests
  ${data.Tests}
  ## Email/Github
  ${data.Email}
  ${data.Username}
`;
}

module.exports = generateMarkdown;