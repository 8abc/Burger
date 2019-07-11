// this is where we will configure our routes to use the express router
const express = require("express");
const router = express.Router();
const Burgers = require("../models/burger");

router.get("/", function(req,res){
    Burgers.selectAll(function(error, burgers){
        if(error) {
            return res.status(501).json({
                message: "Not able to query the database",
                error
            });
        }
        console.log("Burgers: ", burgers);
        res.render("index");
    });
});
module.exports = router;