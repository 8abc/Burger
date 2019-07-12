// this is where I will query my database
// this is the skeleton
// import and require the connection
const connection = require("./connection");

const orm = {
    // this will query the database for the burgers table
    selectAll: function(tableName, cb) {
      let queryString = "SELECT * FROM " + tableName + ";";
      queryDb(queryString, cb);
        },  
    insertOne: function(burgerName, cb) {
      let queryString = `INSERT INTO burgers (burger_name, devoured) VALUES ( ${burgerName}, false);`
      queryDb(queryString, cb);
        },
    updateOne: function(burgerName, devoured, cb) {
      let queryString = `UPDATE burgers SET devoured = ${devoured} WHERE burger_name ${burgerName};`
        queryDb(queryString, cb);
    } 
  
};

function queryDb(queryString,cb) {
  connection.query(queryString, function(err, res) {
    console.log("error: " ,err);
    if (err) {
      return (err);
    }
    cb(res);
  });
}

module.exports = orm;

