
//=== DEPENDENCIES ============================================

var express = require("express");
var path = require("path");
require('dotenv').config;

var PORT = process.env.PORT || 8000;
var app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//=== LISTENER TO START OUR SERVER TO AWAIT REQUESTS===========
app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});

//=== GET ROUTES================================================

// app.use(function (req, res, next, reducer, event) {
//     console.log('Time: %d', Date.now());
// });

// app.get("/", function(req, res) {
//     res.sendFile(path.join(__dirname, "/app/public/home.html"));
// });
    
// app.get("/survey", function(req, res) {
//     res.sendFile(path.join(__dirname, "app/public/survey.html"));
// });