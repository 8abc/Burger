// this is where we will configure our routes to use the express router
const express = require("express");
const router = express.Router();
const orm = require("../config/orm");

router.get("/", function(req,res){
    orm.selectAll(function(error, burgers){
        if(error) {
            return res.status(501).json({
                message: "Not able to query the database"
            });
        }
        console.log("Burgers: ", burgers);
        res.render("index");
    });
});
module.exports = router;