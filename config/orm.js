// this is where I will query my database
// this is the skeleton
// import and require the connection
const connection = require("./connection");

const orm = {
    // this will query the database for the burgers table
    selectAll: function(tableName, cb) {
      let queryString = "SELECT * FROM " + tableName + ";";
      queryDb(queryString, null, cb);
        },  
    insertOne: function(burgerName, cb) {
      console.log("orm burger: ", burgerName);
      let queryString = `INSERT INTO burgers (burger_name, devoured) VALUES ( ?, false);`
      let name =[burgerName]
      queryDb(queryString, name, cb);
        },
    updateOne: function(burgerName, devoured, cb) {
      let queryString = `UPDATE burgers SET devoured = ${devoured} WHERE burger_name ${burgerName};`
        queryDb(queryString, null, cb);
    } 
  
};

function queryDb(queryString, plugIn, cb) {
  connection.query(queryString, plugIn, function(err, res) {
    if (err) {
      console.log("error: " ,err);
      return (err);
    }
    cb(res);
  });
}

module.exports = orm;

