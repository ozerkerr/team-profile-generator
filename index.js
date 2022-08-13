const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const renderTeam = require("./src/html-templates")

const teamMemeberObjArr = [];

// create a function to get manager class
const createManager = () => {
  inquirer.prompt([
    {
      type: "input",
      name: "id",
      message: "What is the Managers ID?"
    },
    {
      type: "input",
      name: "name",
      message: "What is the Managers name?"
    },
    {
      type: "input",
      name: "email",
      message: "What is the Managers email?"
    },
    {
      type: "input",
      name: "officeNumber",
      message: "What is the Managers Office Number?"
    }
  ])
  .then(answers => {
    const manager = new Manager(
      answers.id,
      answers.name,
      answers.email,
      answers.officeNumber
    )
    teamMemeberObjArr.push(manager);
    addEmployees();
  })
};

const addEmployees = () => {
  inquirer.prompt([
    {
      type: "list",
      name: "choice",
      message: "What employees would you like to add?",
      choices: ["Engineer", "Intern", "I'm Done"]
    }
  ]).then(answers => {
    switch (answers.choice){
      case "Engineer":
        createEngineer();
        break;
      case "Intern":
        createIntern();
        break;
      default: 
        buildTeam();
        break;
    }
  });
};

const createEngineer = () => {
  inquirer.prompt([
    {
      type: "input",
      name: "id",
      message: "What is the Engineer ID?"
    },
    {
      type: "input",
      name: "name",
      message: "What is the Engineer name?"
    },
    {
      type: "input",
      name: "email",
      message: "What is the Engineer email?"
    },
    {
      type: "input",
      name: "github",
      message: "What is the Engineer Github?"
    }
  ]).then(answers => {
    const engineer = new Engineer(
      answers.id,
      answers.name,
      answers.email,
      answers.github
    )
    teamMemeberObjArr.push(engineer);
    addEmployees();
  })
}

const createIntern = () => {
  inquirer.prompt([
    {
      type: "input",
      name: "id",
      message: "What is the Intern ID?"
    },
    {
      type: "input",
      name: "name",
      message: "What is the Intern name?"
    },
    {
      type: "input",
      name: "email",
      message: "What is the Intern email?"
    },
    {
      type: "input",
      name: "school",
      message: "What is the Intern school?"
    }
  ]).then(answers => {
    const intern = new Intern(
      answers.id,
      answers.name,
      answers.email,
      answers.school
    )
    teamMemeberObjArr.push(intern);
    addEmployees();
  })
}

const buildTeam = () => {
  fs.writeFile("./dist/index.html", renderTeam(teamMemeberObjArr), (err) =>
  err ? console.log(err) : console.log('Success!')
);

}

console.log(teamMemeberObjArr, 'www')
// initialize function
const init = () => {
  createManager();
};

init();