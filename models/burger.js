// here is where I will require orm and call the methods on a specific table
const orm = require('../config/orm');

const Burgers = {
    selectAll: function(cb){
        orm.selectAll('burgers', cb);
    },
    insertOne: function(burgerName, cb) {
        orm.insertOne(burgerName, cb);
    },
    updateOne: function(burgerName, devoured, cb) {
        orm.updateOne(burgerName, devoured, cb);
    }

};

module.exports = Burgers;