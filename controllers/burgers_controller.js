// this is where we will configure our routes to use the express router
const express = require("express");
const router = express.Router();
const Burgers = require("../models/burger");
// default route
router.get("/",(req,res)=>{
    Burgers.selectAll(function(burgers){
        console.log("Burgers: ", burgers);
        res.render("index", {burgers, style: "burger_style"});
    });
});

router.post("/add", (req,res)=>{
    console.log("Adding buger: " , req.body.burgerName);
    Burgers.insertOne(req.body.burgerName, function(burgerName) {
        res.status(200).json({
            burger_name: burgerName,
            id: burgerName.insertId,
            devoured: 0
        });
    }); 
});

router.delete("/devoured/:id", (req,res) => {
    const id = req.params.id;
    Burgers.deleteOne(id, function(err, burger) {
        console.log("Devoured Burger: ", id);
        res.status(200).json({
            burger_name: burgerName,
            id: burgerName.insertId,
            devoured: 1
        });
    }); 
});
// router.put("/:id/:value", (req,res)=>{
//     const id = req.params.id;
//     const value = req.params.value.
// });
module.exports = router;