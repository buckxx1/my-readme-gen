// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateReadme = require('./utils/generateMarkdown');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [{
  type: 'input',
  name: 'title',
  message: "What's the project title?",
  
  validate: (value)=> {
      if (value) {
          return true;
        } else {
          console.log('Please enter the project title!');
          return false;
        }
  }
},
{
  type: 'input',
  name: 'description',
  message: "Enter project description!",
  
  validate: (value)=> {
      if (value) {
          return true;
        } else {
          console.log('Please enter project description!');
          return false;
        }
  }
},
{
  type: 'input',
  name: 'contribution',
  message: "Enter contribution guidelines for the project",
  
  validate: (value)=> {
      if (value) {
          return true;
        } else {
          console.log('Please enter contribution guidelines for the project!');
          return false;
        }
  }
},
{
  type: 'input',
  name: 'usage',
  message: "Enter project usage information",
  //validate property check
  validate: (value)=> {
      if (value) {
          return true;
        } else {
          console.log('Please enter project usage information!');
          return false;
        }
  }
},
{
  type: 'input',
  name: 'installation',
  message: "Enter project installation proccess",
  //validate property check
  validate: (value)=> {
      if (value) {
          return true;
        } else {
          console.log('Please enter project installation process!');
          return false;
        }
  }
},
{
  type: 'input',
  name: 'tests',
  message: "Enter project test instructions!",
  //validate property check
  validate: (value)=> {
      if (value) {
          return true;
        } else {
          console.log('Please enter project test instructions!');
          return false;
        }
  }
},
{
  type: 'list',
  name: 'license',
  message: "Enter type of licence used!",
  choices:['MIT', 'Boost', 'Apache', 'GNU', 'Creative Commons', 'Eclipes', 'ISC', 'Mozilla Public License 2.0', 'Unlicense'],
 
  validate: (value)=> {
      if (value) {
          return true;
        } else {
          console.log('Please choose a license type!');
          return false;
        }
  }
},
{
  type: 'input',
  name: 'githubUsername',
  message: "Enter Github username!",
  
  validate: (value)=> {
      if (value) {
          return true;
        } else {
          console.log('Please your Github username!');
          return false;
        }
  }
},
{
  type: 'input',
  name: 'email',
  message: "Enter your email address!",
  
  validate: (value)=> {
      if (value) {
          return true;
        } else {
          console.log('Please your email address!');
          return false;
        }
  }
}
];

   



// TODO: Create a function to write README file
function writeToFile (data) {
  fs.writeFile('./readme.md', data, 'utf8', function(err) {

    if (err) {
      return console.log(err);
    }

    console.log("Done!");
  
  });
};

// TODO: Create a function to initialize app
function init() { 
  inquirer.prompt(
  questions
)
.then(
  answers => {
  // Use user feedback
  return generateReadme(answers);
})
.then( generateReadme => {
  console.log('writeFileResponse');
  writeToFile(generateReadme);
})
}


// Function call to initialize app
init();
