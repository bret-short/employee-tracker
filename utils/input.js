const connection = require("./connection.js");

const input = {
  addDepartment: function (deptName) {
        return new Promise(function (resolve, reject) {
        const queryString = `INSERT INTO departments (name) VALUES (?)`;
        connection.query(queryString, deptName, function (err, result) {
                if (err) {
                return reject(err);
                }
                console.log("Department successfully added!");
                    return resolve();
            });
        });
    },

    addRole: function (roleTitle, roleSalary, deptId) {
        return new Promise(function (resolve, reject) {
          const queryString =
            "INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?)";
          connection.query(
                queryString,
                [roleTitle, roleSalary, deptId],
                function (err, result) {
                if (err) {
                    return reject(err);
                }
                console.log("Role successfully added!");
                return resolve();
                }
            );
        });
    },
      
};

module.exports = input;
