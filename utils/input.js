const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3001,
    user: "root",
    password: "root",
    database: "tracker_db"
});

connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;