const mysql = require("mysql");

let connection = mysql.createConnection(process.env.JAWSDB_URL);

connection.connect(function(err){
    if(err) {
        console.error("error: " + err.message);
    }
    console.log("connected as id " + connection.threadId+ "\n");
});

module.exports = connection;