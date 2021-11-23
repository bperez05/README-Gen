// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const {generateMarkdown} = require('./utils/generateMarkdown');
const fs = require('fs');
const shell = require('shell.js');

// TODO: Create an array of questions for user input
const questions = {function promptUser(){
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
            name:'license',
            message:'Please select the license you would like to use.',
            choices: ['MIT License', 
            'Apache License', 
            'GPL General Public License']
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
function writeToFile(fileName, data) {
    fs.writeToFile('./README.md'/ generateMarkdown(info));
}

// TODO: Create a function to initialize app
function init = () => {
    questions()
        .then((data) => writeToFile(data))
        //.then(() => console.log('success'))
        .catch((err) => console.error(err));
};

// Function call to initialize app
init();
