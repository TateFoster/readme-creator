// The modules needed for this application to work

const inquirer = require("inquirer");
const fs = require("fs");

// inquirer prompts to get user variables needed for the produced ReadMe

inquirer.prompt([
	{
		type: "input",
		message: "What is the title of this project?",
		name: "title",
	},
	{
		type: "input",
		message: "Please write a description of the project.",
		name: "description",
	},
	{
		type: "input",
		message: "Please write what this project is used for.",
		name: "usage",
	},
	{
		type: "input",
		message: "Please write how to install this project.",
		name: "installation",
	},
	{
		type: "input",
		message: "Please choose what license this project uses",
		name: "license",
	},
	{
		type: "input",
		message: "What were the contributors to this project?",
		name: "contributors",
	},
	{
		type: "input",
		message: "What tests were done with/on this project?",
		name: "tests",
	},
	{
		type: "input",
		message: "Please input your GitHub username.",
		name: "github",
	},
	{
		type: "input",
		message: "Please input your email.",
		name: "email",
	},
]);

function createReadMe() {
	return `# Project Title variable

    ## Table of contents
    >
    >[Description](#description)
    >
    >[Installation](#installation)
    >
    >[Usage](#usage)
    >
    >[Licenses](#licenses)
    >
    >[Contributions](#contributions)
    >
    >[Tests](#tests)
    >
    >[Questions](#questions)
    
    ## Description
    
    description variable
    
    ## Usage
    
    usage variable
    
    ## Installation
    
    installation instruction variable
    
    ## License
    
    license variable + shield variable
    
    ## Contributions
    
    contributors variable
    
    ## Tests
    
    test variable
    
    ## Questions
    
    If you have any questions you can reach out on my GitHub at:
    
    [GitHub](github.com/github variable
    
    or email me at:
    
    [email variable](email variable`;
}
