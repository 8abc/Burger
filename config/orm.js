// this is where I will query my database
// this is the skeleton
// import and require the connection
const connection = require("./connection");

const orm = {
    // this will query the database for the burgers table
    selectAll: function(tableInput, cb) {
        connection.query("SELECT * FROM ?", [tableInput], function (err, res) {
            if (err) return cb(err,null);
            cb(null,res);
          });
           
        }
    
};


module.exports = orm;

