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
    message: 'Would you like to add a table of contents?',
    name: 'confirmTableOfContents',
    default: true
},{
    type: 'input',
    message: 'What does the user need to install to run this app. (mandatory)',
    name: 'installation'
},{
    type: 'input',
    message: 'Provide content for the usage of the project. (mandatory)',
    name: 'usage'
},{
    type: 'input',
    name: 'credits',
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
    choices: ['MIT License', 'GNU General Public License' , 'Mozilla Public License', 'The Unlicense'],
    when: ({confirmLicense}) => {
        if (confirmLicense) {
            return true;
        } else {
            return false;
        }
    }
},{
    type: 'confirm',
    name: 'confirmBadges',
    message: 'Would you like to add any badges?',
    default: false
},{
    type: 'input', 
    name: 'Badges',
    message: 'Enter any badges you would like to add.',
    when: ({confirmBadges}) => {
        if (confirmBadges) {
            return true;
        } else {
            return false;
        }
    }
},{
    type: 'confirm',
    name: 'confirmFeatures',
    message: 'Would you like to list any features?',
    default: false
},{
    type: 'input',
    name: 'features',
    message: 'Please list and project features.',
    when: ({confirmFeatures}) => {
        if (confirmFeatures) {
            return true;
        } else {
            return false;
        }
    }
},{
    type: 'input',
    name: 'email',
    message: 'What is yout contact e-mail address? (mandatory)',
    validate: answerInput => {
        if (answerInput) {
            return true;
        } else {
            console.lof('Please enter your contact email!!!');
            return false;
        }
    }
},{
    type: 'input',
    name: 'github',
    message: 'What is your gitHub username?',
    validate: answerInput => {
        if (answerInput) {
            return true;
        } else {
            console.log('Please enter your gitHub username');
            return false;
        }
    }
}
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, function(err) {
        console.log('file name',fileName)
        console.log(data)
        if (err) {
            return console.log(err)
        } else {
            console.log('success')
        };
    });
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function(data) {
            writeToFile('README.md', generateMarkdown(data));
            console.log(data)
        })
}

// Function call to initialize app
init();
