require('dotenv').config()
const express = require("express");
const exphbs = require("express-handlebars");
const PORT = process.env.PORT || 3001;
const app = express();

app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

app.get("/", function (req, res) {
    res.render("index");
});

app.listen(PORT, () => {
    console.log("Server is starting on PORT : ", PORT);
});
