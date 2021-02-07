# Employee Tracker

This is a Node application for a business owner to use in order to view and manage departments, roles and employees in the company.

This application will help to organize and plan the business. 

## First

In order to run the application be sure to npm install to install the necessary packages. Once installe you will want to adjust the login credentials of your MYSQL server in the connection.js file. 

To start your server run the command "mysql -u root -p tracker_db" in order to establish a new database named tracker_db. When prompted enter your MYSQL password and then run "mysql -u root -p tracker_db < schema.sql" in order to migrate the schema into the new database to generate the new tables. Once the tables are generated you can run "mysql -u root -p tracker_db < seeds.sql" to import the starting data. Alternatively you may inster your own data into the table with commands such as:

INSERT INTO departments (id, name)
VALUES (1, 'Sales');

INSERT INTO roles (id, title, salary, department_id)
VALUES (1, 'Sales', 42000, 1);

INSERT INTO employees (id, first_name, last_name, role_id, manager_id)
VALUES (3, "Michael", "Scott", 2, 4);

## Executing your own Application

When you are happy with your tables you may exit the mysql. 

When you are ready to run the application simply run "node index.js"

Use the arrow keys to navigate and the enter key to make a selection. 

Simply toggle to the "Quit" button to exit the application. 

## Tools Used
* Node.js
* Inquirer
* MYSQL
* MYSQL2
* console.table

## Video Demonstration
https://drive.google.com/file/d/1AbtnaVoFm16dS5UDoUyuYZH0DGubYqr5/view
