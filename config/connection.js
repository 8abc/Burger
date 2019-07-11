
const mysql = require("mysql");

let connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "burgers_db"
});


connection.connect(function(err){
    if(err) {
        throw err;
        return console.error("error: " + err.message);
    }
    console.log("connected as id " + connection.threadId+ "\n");
});

module.exports = connection;