// this is where I will query my database
// import and require the connection
const connection = require("./connection.js");

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
    }, 
    deleteOne: function(id, cb) {
      let queryString = `DELETE FROM burgers WHERE id = ${id};`
        queryDb(queryString, id, cb);
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

