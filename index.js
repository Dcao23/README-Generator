// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require ('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'Title',
    },
    {
        type: 'input',
        message: 'Description:',
        name: 'Description',
    },
    {
        type: 'input',
        message: 'What will you need to install for this application?',
        name: 'Installation',
    },
    {
        type: 'input',
        message: 'What is required for usage of this application?',
        name: 'Usage',
    },
    {
        type: 'list',
        message: 'Which license would you like to use?',
        name: 'License',
        choices: ['Apache', 'GNU General Public', 'MIT', 'Boost Software', 'none']
    },
    {
        type: 'input',
        message: 'Who contributed to the making of this project?',
        name: 'Contributing',
    },
    {
        type: 'input',
        message: 'What commands are needed to run this application?',
        name: 'Tests',
    },
    {
        type: 'input',
        message: 'What technology is used for this application?',
        name: 'Technologies',
    },
    {
        type: 'input',
        message: 'What is your Github username?',
        name: 'Username',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'Email',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log('success');
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function (data) {
        console.log(data);
        const fileName = './utils/NewREADME';
        writeToFile(fileName, generateMarkdown(data));
    });
}

// Function call to initialize app
init();
