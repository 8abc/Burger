// this is where I will query my database
// this is the skeleton
// import and require the connection
const connection = require("./connection");

const orm = {
    // this will query the database for the burgers table
    selectAll: function(tableInput, cb) {
      let queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function (err, res) {
            if (err) {
              return err;
            }
            cb(res);
          });
           
        }  
};

// all: function(tableInput, cb) {
//   var queryString = "SELECT * FROM " + tableInput + ";";
//   connection.query(queryString, function(err, result) {
//     if (err) {
//       throw err;
//     }
//     cb(result);
//   });
// },
module.exports = orm;

