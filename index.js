// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const {generateMarkdown} = require('./utils/generateMarkdown');
const fs = require('fs');


// TODO: Create an array of questions for user input
const questions = () => {
    inquirer.prompt([

        {
            type: 'input',
            name:'title',
            message:'What is the title of your project?'
        },
        {
            type: 'input',
            name:'description',
            message:'Please write a description of your project?'
        },
        {
            type: 'input',
            name:'installation',
            message:'What are your installation instructions?'
        },
        {
            type: 'input',
            name:'usage',
            message:'What is this project used for?'
        },
        {
            type: 'list',
            name:'licenseSelec',
            message:'Please select the license you would like to use with up and down arrows.',
            choices: [
                'GPL General Public License', 
                'Apache License', 
                'MIT License',
            ]
            
        },
        {
            type: 'input',
            name:'contributors',
            message:'Please add any contributors to your project.'
        },
        {
            type: 'input',
            name:'testing',
            message:'Please provide testing instructions for your project.'
        },
        {
            type: 'input',
            name:'email',
            message:'What is your email?'
        },
        {
            type: 'input',
            name:'username',
            message:'What is your GitHub username?'
        },
        {
            type: 'input',
            name:'repository',
            message:'What is the link to your GitHub repository?'
        },

    ])

};

// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeToFile('./output/README.md', generateMarkdown(data))
};



// TODO: Create a function to initialize app
const init = () => {
    questions()
        .then((data) => writeToFile(data))
        //.then(() => console.log('success'))
        .catch((err) => console.error(err));
};

// Function call to initialize app
init();
