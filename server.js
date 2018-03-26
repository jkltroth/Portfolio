const express = require("express");
const bodyParser = require("body-parser");

const axios = require("axios");

const PORT = process.env.PORT || 3000;

// Initialize Express
const app = express();

// Use express.static to serve the public folder as a static directory
app.use(express.static("public"));

// Use body-parser for handling form submissions
app.use(bodyParser.urlencoded({
    extended: false
}));

// Set Handlebars.
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
const routes = require("./controllers/portfolioController.js");

app.use("/", routes);

// Start the server
app.listen(PORT, function () {
    console.log("App running on port " + PORT + "!");
  });