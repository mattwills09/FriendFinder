
//=== DEPENDENCIES ============================================

var express = require("express");
var path = require("path");
require('dotenv').config;

// var friends = ("../data/friends");

var PORT = process.env.PORT || 8000;
var app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//=== GET ROUTES================================================

app.use();

    app.get("/api/friends", function(req, res) {
    res.json(friends);
});
    
app.post("/api/friends", function(req, res) {
    var newFriend = req.body;
    
    console.log("New Friend: " + newFriend);
    
    var sumsOfDifferences = [];
    for (var i = 0; i < friends.length; i++) {
        var currentFriend = friends[i];
        var differenceArr = [];
        console.log("Current Friend: " + currentFriend);
    
        for (var j = 0; j < currentFriend.scores.length; j++) {
            var difference = parseInt(currentFriend.scores[j]) - parseInt(newFriend.scores[j]);
            differenceArr.push(difference);
            console.log("Difference: " + difference);
        }
            
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
            
        // console.log("Difference Array: " + differenceArr);
        var ourDifference = differenceArr.reduce(reducer);
        sumsOfDifferences.push(Math.abs(ourDifference));
    
        console.log("Our Difference: " + ourDifference);
        console.log("Sums of Differences: " + sumsOfDifferences);
    }
    
        var min = Math.min.apply(Math, sumsOfDifferences)
        console.log(min);
        console.log("Sums of Differences2: " + sumsOfDifferences);
    
        var ourIndex = sumsOfDifferences.indexOf(Math.abs(min));
        console.log("Our Index: " + ourIndex);
    
            
        friends.push(newFriend);
        console.log("All Friends: " + friends);
    
        res.json(friends[ourIndex]);
        //^LAST THING TO BE READ ^
});