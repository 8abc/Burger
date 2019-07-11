// require packages
require('dotenv').config()
// require('./config/connection');
const express = require("express");
const exphbs = require("express-handlebars");
const PORT = process.env.PORT || 3001;
// defines express application
const app = express();
// import routes
const routes = require("./controllers/burgers_controller")
// configure express handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

// configure routes
app.use("/", routes);
// app.get("/", function (req, res) {
//     res.render("index");
// });

app.listen(PORT, () => {
    console.log("Server is starting on PORT : ", PORT);
});
