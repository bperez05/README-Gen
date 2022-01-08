// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  let licenseSelc = `${data.licenseChoice}`;
  let theLicense = '';
  if(licenseSelc === 'GNU General Public License') {
    theLicense =`[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)]`
  } else if (licenseSelc === 'Mozilla Public License 2.0') {
    theLicense = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)]`
  } else if (licenseSelc === 'MIT License') {
    theLicense = `[![License: MIT] (https://img.shields.io/badge/License-MIT-yellow.svg)]`
  } else {
    licenseType = "N/A"
  };
    return theLicense;
};
  


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseSelc = `${data.licenseSelc}`;
  let theLicense = '';
  if(licenseSelc === 'GNU General Public License') {
    theLicense =`[![License: GPL v3](https://opensource.org/licenses/MPL-2.0)]`
  } else if (licenseSelc === 'Mozilla Public License 2.0') {
    theLicense = `[![License: MPL 2.0](https://opensource.org/licenses/MPL-2.0)]`
  } else if (licenseSelc === 'MIT Licesnse') {
    theLicense = `[![License: MIT] (https://opensource.org/licenses/MIT)]`
  } else {
    licenseSelc = "N/A"
  };
    return theLicense;
  
  return`(##license)`;
}
  



// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  let licenseSelc = `${data.licenseChoice}`;
  let theLicense = '';
  if(licenseSelc === 'GNU General Public License') {
    theLicense =`[![License: GPL v3](https://opensource.org/licenses/MPL-2.0)]`
  } else if (licenseSelc === 'Mozilla Public License 2.0') {
    theLicense = `[![License: MPL 2.0](https://opensource.org/licenses/MPL-2.0)]`
  } else if (licenseSelc === 'MIT Licesnse'){
    theLicense = `[![License: MIT] (https://opensource.org/licenses/MIT)]`
  } else {
    licenseType = "N/A"
  };
    return theLicense;
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Test Instructions](#test-instructions)
  - [Questions](#questions)
  - [Contributors](#contributors)
  - [License](#license)
  - [Repository](#repository)
  
  ## title
  ${data.title}

  ## Description 
  ${data.description}
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## Test-Instructions
  ${data.testing}
  
  ## Questions
  Github: ${data.username}
  E-mail: ${data.email}
  
  ## Contributors
  ${data.contributors}
  
  ## License
  ${data.license ? renderLicenseLink(data.license):""}

  ## Repository Link
  ${data.repository}
  

`;
}

module.exports = generateMarkdown;
