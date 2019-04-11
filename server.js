//dependencies
var express = require("express");
var path = require("path");
//create express server
var app = express();
//sets PORT
var PORT = process.env.PORT || 8080;
//sets up express app for data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//route files
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);
//listener for server start
app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});
