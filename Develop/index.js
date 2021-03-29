
// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
let generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {   type: "input",
        name: "title",
        message: "What is the title of your project?"   },
    {   type: "input",
        name: "description",
        message: "What is a consice description of your project?"   },
    {   type: "input",
        name: "installation",
        message: "Provide a step-by-step description of how to get the development environment running."   },
    {   type: "input",
        name: "usage",
        message: "What is this project used for?"   },
    {   type: "list",
        name: "licenses",
        message: "Are there any licenses you want to add to this project?",
        choices: ["MIT", "MPL", "Eclipse", "N/A"]   },
    {   type: "input",
        name: "contribution",
        message: "What are the contribution guidelines(if any)?"   },
    {   type: "input",
        name: "test",
        message: "How many tests do you have and what instructions do you have for them?"},
    {   type: "input",
        name: "questions",
        message: "What is your email?"},
    {   type: "input",
        name: "profile",
        message: "What is your GitHub username?"}
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    let markDown = generateMarkdown(data);
    fs.writeFile(fileName, markDown, (err) => {
        if(err){
            console.log(err);
        } else{
            console.log("ReadMe has been created succefully!");
        }
    });
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
            .then(answers => {
                writeToFile("README.md", answers);
            });
};

// Function call to initialize app
init();
