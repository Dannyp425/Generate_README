// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT"){
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (license === "Eclipse") {
    return "[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)";
  } else if (license === "MPL") {
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
  } else {
    return " ";
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let badge = renderLicenseBadge(data.licenses);
  return `
  ${badge}
  # ${data.title}

  ## **Description**:
    ${data.description}

  ## Table of Content
  * [Get started](#installation)
  * [Usage](#usage)
  * [Licenses](#licenses)
  * [Contributiion](#contributing)
  * [Test(s)](#test(s))
  * [Profile](#profile)

  ### **Installation**:
    ${data.installation}

  ### **Usage**:
    ${data.usage}

  ### **Licenses**:
    ${data.licenses}

  ### **Contributing**:
    ${data.contribution}
    
  ### **Test(s)**:
    ${data.test}

  ### **Questions**:
    Please refer all questions to ${data.questions}.

  ### **Profile**:
    You can also visit my GitHub at [github.com/${data.profile}](https://www.github.com/Dannyp425)
`;
};

module.exports = generateMarkdown;
