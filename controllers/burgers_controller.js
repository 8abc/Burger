// this is where we will configure our routes to use the express router
const express = require("express");
const router = express.Router();
const Burgers = require("../models/burger");

router.get("/", function(req,res){
    Burgers.selectAll(function(burgers){
        console.log("Burgers: ", burgers);
        res.render("index", {burgers});
    });
});

router.post("/add", function(req,res){
    Burgers.insertOne(req.body.burgerName, function(burgerName) {
        res.status(200).json({
            burger_name: burgerName,
            id: burgerName.insertId,
            devoured: 0
        });
    }); 
});
module.exports = router;