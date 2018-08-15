var friends = require("../data/friends");
var express = require("express");

var app = express();


module.exports = function(app) {
    
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function(req, res) {
        var totalDifference = 0;
        var totalTemp = 0;
        var matchIndex;
        var user = req.body;
        
        for(var i = 0; i < friends.length; i++) {
            for (var j = 0; j <friends[i].scores.length; j++) {
                totalTemp += Math.abs(parseInt(user.scores[j]) - parseInt(friends[i].scores[j]));
            }
            if (totalTemp > totalDifference) {
                totalDifference = totalTemp;
                matchIndex = i;
            }
        }
        friends.push(user);
        res.json(friends[matchIndex]);
    });
    
};