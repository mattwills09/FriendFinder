//=== DEPENDENCIES ============================================

var express = require("express");
var path = require("path");
require('dotenv').config;

// var friends = ("../data/friends");

var PORT = process.env.PORT || 8000;
var app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var friends = [
    {
        name: "Sadie Williams",
        photo: "https://i.imgur.com/9a7cAAh.jpg",
        scores: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5]
    },
    {
        name: "Kendall Snowcone",
        photo: "http://www.abergavennychronicle.com/images/news/2019/1314_chris-copner-abergavenny-ice-cream-man-copy.jpg",
        scores: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2] 
    }
];


//=== GET ROUTES================================================

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/app/public/home.html"));
});

app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "app/public/survey.html"));
});

//=== API ROUTES================================================

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
        
        console.log("Difference Array: " + differenceArr);
        var ourDifference= differenceArr.reduce(reducer);
        sumsOfDifferences.push(ourDifference);

        console.log("Our Difference: " + ourDifference);
        console.log("sums of Differences: " + sumsOfDifferences);
    }

        var min = Math.min.apply(Math, sumsOfDifferences)
        console.log(min);
        console.log("Sums of Differences2: " + sumsOfDifferences);

        var ourIndex = sumsOfDifferences.indexOf(Math.abs(min));
        console.log("Our Index: " + ourIndex);

        
    friends.push(newFriend);
    console.log("All Friends: " + friends);

    res.json(friends[ourIndex]);
    //LAST THING TO BE READ ^

// });


    // for (var i = 0; i < friendSurvey.scores.length; i++) {
    //     friendSurvey.scores[i] = parseInt(friendSurvey.scores[i]);
    // }
    // var bestMatchIndex = 0;
    // var minDifference = 40;
    // var totalDifference = 0;

    // for (var j = 0; j < friends[i].scores.lenght; j++) {
    //     var difference = Math.abs(friendSurvey.scores[j] - friends[i].scores[j]);
    //     totalDifference = difference;
    // }
    // if (totalDifference < minDifference) {
    //     bestMatchIndex = i;
    //     minDifference = totalDifference;
    // }

    // friends.push(friendSurvey);
    // res.json(friends[bestMatchIndex]);

});


//=== LISTENER TO START OUR SERVER TO AWAIT REQUESTS===========
app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});