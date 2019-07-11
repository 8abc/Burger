// this is where I will query my database

// imports the connection
const connection = ("./connection.js");

const orm = {
    // this will query the database for the burgers table
    selectAll: function(tableInput, cb) {
        connection.query("SELECT * FROM burgers", function (error, res) {
            if (err) cb(err,null);
            cb(null,res);
          });
           
        }
    
};


module.exports = orm;

