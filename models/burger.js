// here is where I will require orm and call the methods on a specific table
const orm = require('../config/orm');

const Burgers = {
    selectAll: function(cb){
        orm.selectAll('burgers', cb);
    }
}

module.exports = Burgers;