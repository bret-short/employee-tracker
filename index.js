const input = require("./utils/input.js");
const inquirer = require("inquirer");

// View employees, view departments, view roles, add employee, add department, add role, update role, update manager, 
// view employees by manager, delete employee, delete role, delete department, quit


// This function generates the top-level choices for the user.  Upon selecting any of them, a new function is executed
// specific to that choice.  Upon completion of the selected task, this function is called once again.
function mainMenu() {
    console.log("Welcome to the Employee Tracker!\n")
    inquirer.prompt({
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
            "Quit"
        ],
        name: "choice"
    }).then(function({ choice }) {
        if (choice === "View all employees") {
            input.viewEmployees()
            .then(function() {
                console.log("\n");
                mainMenu();
            });
        } else if (choice === "View all departments") {
            input.viewDepartments()
            .then(function() {
                console.log("\n");
                mainMenu();
            });
        } else if (choice === "View all roles") {
            input.viewRoles()
            .then(function() {
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



mainMenu();