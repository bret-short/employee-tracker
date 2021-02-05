const input = require("./utils/input.js");
const inquirer = require("inquirer");

// View employees, view departments, view roles, add employee, add department, add role, update role, update manager,
// view employees by manager, delete employee, delete role, delete department, quit

// This function generates the top-level choices for the user.  Upon selecting any of them, a new function is executed
// specific to that choice.  Upon completion of the selected task, this function is called once again.
function mainMenu() {
  console.log("Welcome to the Employee Tracker!\n");
  inquirer
    .prompt({
      type: "list",
      message: "What would you would like to do",
      choices: [
        "View all departments",
        "View all roles",
        "View all employees",
        "Add a department",
        "Add a role",
        "Add an employee",
        "Update role",
        "Update employee manager",
        "Display employees by manager",
        "Delete a department",
        "Delete a role",
        "Delete an employee",
        "View utilized budget for a department",
        "Quit",
      ],
      name: "choice",
    })
    .then(function ({ choice }) {
      if (choice === "View all employees") {
        input.viewEmployees().then(function () {
          console.log("\n");
          mainMenu();
        });
      } else if (choice === "View all departments") {
        input.viewDepartments().then(function () {
          console.log("\n");
          mainMenu();
        });
      } else if (choice === "View all roles") {
        input.viewRoles().then(function () {
          console.log("\n");
          mainMenu();
        });
      } else if (choice === "Add an employee") {
        addEmployeePrompt();
      } else if (choice === "Add a department") {
        addDepartmentPrompt();
      } else if (choice === "Add a role") {
        addRolePrompt();
      } else if (choice === "Update role") {
        updateRolePrompt();
      } else if (choice === "Update employee manager") {
        updateManagerPrompt();
      } else if (choice === "Display employees by manager") {
        displayByMgrPrompt();
      } else if (choice === "Delete an employee") {
        deleteEmployeePrompt();
      } else if (choice === "Delete a role") {
        deleteRolePrompt();
      } else if (choice === "Delete a department") {
        deleteDepartmentPrompt();
      } else if (choice === "View utilized budget for a department") {
        displayUtilizedBudgetPrompt();
      } else {
        input.endConnection();
      }
    });
}

// Prompt user for information about new employee, calls input function to add it to the database
function addEmployeePrompt() {
  input.getEmployees().then(function (res) {
    const managerArray = [];
    for (let i = 0; i < res.length; i++) {
      managerArray.push(res[i].name);
    }
    managerArray.push("none");
    input.getRoles().then(function (response) {
      const roleTitleArray = [];
      for (let i = 0; i < response.length; i++) {
        roleTitleArray.push(response[i].title);
      }
      inquirer
        .prompt([
          {
            type: "input",
            message: "Enter employee's first name",
            name: "firstName",
          },
          {
            type: "input",
            message: "Enter employee's last name",
            name: "lastName",
          },
          {
            type: "list",
            message: "Select employee's role",
            choices: roleTitleArray,
            name: "role",
          },
          {
            type: "list",
            message: "Select employee's manager",
            choices: managerArray,
            name: "manager",
          },
        ])
        .then(function ({ firstName, lastName, role, manager }) {
          const roleId = response[roleTitleArray.indexOf(role)].id;
          if (manager === "none") {
            input.addEmployee(firstName, lastName, roleId).then(function () {
              console.log("\n");
              mainMenu();
            });
          } else {
            const managerId = res[managerArray.indexOf(manager)].id;
            input
              .addEmployee(firstName, lastName, roleId, managerId)
              .then(function () {
                console.log("\n");
                mainMenu();
              });
          }
        });
    });
  });
}

// Prompts user for infinputation needed to make new department, then calls input function to add it to the database
function addDepartmentPrompt() {
  input.getDepartments().then(function (response) {
    const deptArray = [];
    for (let i = 0; i < response.length; i++) {
      deptArray.push(response[i].name);
    }
    inquirer
      .prompt({
        type: "input",
        message: "Enter the name of new department you'd like to add",
        name: "deptName",
      })
      .then(function ({ deptName }) {
        if (deptArray.includes(deptName)) {
          console.log("There is already a department with that name!\n");
          mainMenu();
        } else {
          input.addDepartment(deptName).then(function () {
            console.log("\n");
            mainMenu();
          });
        }
      });
  });
}
// Prompts user for infinputation needed to make a new role, then calls input function to add it to the database
function addRolePrompt() {
  input.getRoles().then(function (roles) {
    const roleArray = [];
    for (let i = 0; i < roles.length; i++) {
      roleArray.push(roles[i].title);
    }
    input.getDepartments().then(function (deptArray) {
      const deptNames = [];
      for (let i = 0; i < deptArray.length; i++) {
        deptNames.push(deptArray[i].name);
      }
      inquirer
        .prompt([
          {
            type: "input",
            message: "Enter the name of the role you would like to add",
            name: "title",
          },
          {
            type: "input",
            message: "Enter the annual salary of the new role",
            name: "salary",
          },
          {
            type: "list",
            message: "Select the department in which the new role will work",
            choices: deptNames,
            name: "department",
          },
        ])
        .then(function ({ title, salary, department }) {
          const deptId = deptArray[deptNames.indexOf(department)].id;
          if (roleArray.includes(title)) {
            console.log("Error - that title already exists!\n");
            mainMenu();
          } else {
            input.addRole(title, salary, deptId).then(function () {
              console.log("\n");
              mainMenu();
            });
          }
        });
    });
  });
}


mainMenu();
