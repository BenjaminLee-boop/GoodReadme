// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
  { name: "msgTitle", message: "Please Enter the Title for your project." },
  {
    name: "msgDescript",
    message: "Please Enter a Description For This project",
  },
  {
    name: "msgUage",
    message: "Please Enter Usage Information for this project",
  },
  {
    name: "msgContributing",
    message: "Please Enter Infomation on how a user can Contribute.",
  },
  {
    name: "msgTest",
    message: "Please Enter Any Infomation About Tests",
  },
  {
    name: "msgInstall",
    message: "Please Enter Any Installation Infomation",
  },
  {
    name: "msgQuestion",
    message: "Please Enter Any Question Infomation",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  console.log(fileName);
  fs.writeFile(fileName, data, function (err) {
    if (err) return console.log(err);
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    let data = ` # ${answers.msgTitle}

  ## Table of Contents:
  1. [Description](##description)
  2. [Usage](##usage)
  3. [Installation](##installation)
  4. [Questions](##questions)
  5. [Tests](##tests)
  6. [Contributing](##contributing)

  ## Description
  ${answers.msgDescript}

  ## Usage 
  ${answers.msgUage}

  ## Installation
  ${answers.msgInstall}

  ## Questions
  ${answers.msgQuestion}

  ## Tests
  ${answers.msgTest}

  ## Contributing
  ${answers.msgContributing}

  `;
    writeToFile("readme.MD", data);
  });
}

// Function call to initialize app
init();
