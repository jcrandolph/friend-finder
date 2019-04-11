var friends = require("./../data/friends.js");

module.exports = function(app) {
    app.get("/api/friends", function(req,res) {
        res.json(friends);
    });

    app.post("/api/friends", function(req,res) {
        var newFriend = {
            name: req.body.name,
            photo: req.body.photo,
            scores: []
          };
          var scoresArray = [];
          for(var i=0; i < req.body.scores.length; i++){
            scoresArray.push( parseInt(req.body.scores[i]) )
          }
          newFriend.scores = scoresArray;

          friends.push(newFriend)
    });
}
