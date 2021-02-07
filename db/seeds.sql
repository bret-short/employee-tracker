USE tracker_DB;

----- Department Seeds -----

INSERT INTO department (id, name)
VALUES (1, "Sales");

INSERT INTO department (id, name)
VALUES (2, "Management");

INSERT INTO department (id, name)
VALUES (3, "Human Resouces");

INSERT INTO department (id, name)
VALUES (4, "Accounting");

----- Role Seeds -----

INSERT INTO role (id, title, salary, department_id)
VALUES (1, "Sales", 42000, 1);

INSERT INTO role (id, title, salary, department_id)
VALUES (2, "Assistant to the Regional Manager", 60000, 2);

INSERT INTO role (id, title, salary, department_id)
VALUES (3, "Regional Manager", 75000, null);

INSERT INTO role (id, title, salary, department_id)
VALUES (4, "Office Manager", 65000, 2);

INSERT INTO role (id, title, salary, department_id)
VALUES (5, "Accountant", 70000, 4);

INSERT INTO role (id, title, salary, department_id)
VALUES (6, "HR Director", 100000, 3);

INSERT INTO role (id, title, salary, department_id)
VALUES (7, "Temp", 80000, 2);

INSERT INTO role (id, title, salary, department_id)
VALUES (8, "Foreman", 52000, 2);

INSERT INTO role (id, title, salary, department_id)
VALUES (9, "Sales", 105000, 1);

INSERT INTO role (id, title, salary, department_id)
VALUES (10, "Sales", 105000, 1);

----- Employees Seeds -----

INSERT INTO employees (id, first_name, last_name, role_id, manager_id)
VALUES (4, "Pam", "Beasly", 3, null);

INSERT INTO employees (id, first_name, last_name, role_id, manager_id)
VALUES (5, "Oscar", "Martinez", 4, null);

INSERT INTO employees (id, first_name, last_name, role_id, manager_id)
VALUES (7, "Ryan", "Howard", 6, null);

INSERT INTO employees (id, first_name, last_name, role_id, manager_id)
VALUES (10, "Phyllis", "Vance", 9, null);

INSERT INTO employees (id, first_name, last_name, role_id, manager_id)
VALUES (3, "Michael", "Scott", 2, 4);

INSERT INTO employees (id, first_name, last_name, role_id, manager_id)
VALUES (1, "Jim", "Halpert", 1, 3);

INSERT INTO employees (id, first_name, last_name, role_id, manager_id)
VALUES (2, "Dwight", "Schrute", 1, 3);

INSERT INTO employees (id, first_name, last_name, role_id, manager_id)
VALUES (6, "Toby", "Flenderson", 5, 7);

INSERT INTO employees (id, first_name, last_name, role_id, manager_id)
VALUES (8, "Darryl", "Philbin", 7, 10);

INSERT INTO employees (id, first_name, last_name, role_id, manager_id)
VALUES (9, "Stanley", "Hudson", 8, 10);