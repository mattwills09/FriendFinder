
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

//=============================================================

var friends = [
    {
        name: "Sadie Williams",
        photo: "https://i.imgur.com/9a7cAAh.jpg",
        scores: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5]
    },{
        name: "Kendall Snowcone",
        photo: "http://blog.wildfang.com/wp-content/uploads/2015/11/500x500xFullSizeRender-10.jpg.pagespeed.ic.Ab25bBaGfu.jpg",
        scores: [2, 1, 2, 1, 2, 1, 2, 1, 2, 2] 
    },{
        name: "Johnny Agreeable",
        photo: "https://www.abc.net.au/reslib/200803/r235728_948392.jpg",
        scores: [2, 5, 1, 2, 4, 5, 5, 2, 1, 4] 
    },{
        name: "Jamie Risktaker",
        photo: "http://www.motorcycleinsurance.com/wp-content/uploads/2012/02/Mark-Papa-Guardado.jpg",
        scores: [3, 1, 4, 5, 1, 1, 2, 4, 5, 5] 
    },{
        name: "Esteban Alejandro",
        photo: "https://sapthapadhi.com/wp-content/uploads/thon/black-guy-hairstyles-beautiful-cool-black-men-hair-2013-mens-hairstyles-2018-of-black-guy-hairstyles-300x210.jpg",
        scores: [4, 4, 4, 5, 2, 3, 4, 5, 5, 5] 
    }
    
];

//APP.USE to link route files
app.use(function (req, res, next, reducer, event) {
    console.log('Time: %d', Date.now());
});

//CORS ISSUE
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

//=== HTML GET ROUTES================================================

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/app/public/home.html"));
});

app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "app/public/survey.html"));
});

// //=== API ROUTES================================================

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
