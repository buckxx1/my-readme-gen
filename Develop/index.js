// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    name: 'projectName',
    message: 'please enter the name of your project? (mandatory)',
},{
    type: 'input',
    name: 'description',
    message: 'Please enter a description of the project. (mandatory)',
},{
    type: 'confirm',
    message: 'Table of Contents',
    name: 'Would you like to add a table of Contents?',
    default: true
},{
    type: 'input',
    message: 'What does the user need to install to run this app. (mandatory)',
    name: 'Installation'
},{
    type: 'input',
    message: 'Provide content for the usage of the project. (mandatory)',
    name: 'usage'
},{
    type: 'input',
    name: 'credit',
    message: 'Please enter credits necissary for the project. (mandatory)'
},{
    type: 'confirm',
    name: 'confirmLicense',
    message: 'Would you like to add a License?',
    default: false
},{
    type: 'list',
    name: 'license',
    message: 'Please select all aplicable Licenses for this project.',
    choices: ['placeholder1', 'placeholder2' , 'placeholder3', 'placeholder4']
}
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data) {
        console.log(fileName)
        console.log(data)
        if (err) {
            return console.log(err)
        } else {
            console.log('success')
        };
    };
};

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
