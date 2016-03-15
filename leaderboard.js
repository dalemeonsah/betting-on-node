var fs = require('fs');
var jsonfile = require('jsonfile');
// var fileTxt = '/vagrant/work/betting-on-node/leaderboard.txt';//TODO: change to json!
var fileJson = '/vagrant/work/betting-on-node/leaderboard.json';

//Read file first then write
var leaderBoardModule = (function() {

  var list = {};
  function _updateLeaderBoard(playerName, highScore) {
    fs.readFile(fileJson, function readSuccess(err, data){
      if(err) return console.error(err);
      var index = Object.keys(data).indexOf(playerName);
      //TODO: write into that line
      if (index >= 0){
        // exists, update the score
        console.log(playerName + "is updated!");
        list[Object.keys(data)[index]] = highScore;
      } else {
        // append the new player and the score
        list[playerName] = highScore;
      }
      // list = data;
      jsonfile.writeFile(fileJson, list, function(err){
        if(err) console.log(err);
        console.log('writen!');
      })
    });   
  }

  function  _displayLeaderBoard() {
    // read the file and display
    fs.readFile(fileJson, function displaySuccess(err, data){
      if(err) return console.error(err);
      var display = data.toString();
      console.log(display);
      // var displayLdb = JSON.stringify(data);
      // console.log(displayLdb);
    });
  }

  function init() {
    //_displayLeaderBoard();
  }

  init();

  return {
    update: _updateLeaderBoard,
    display: _displayLeaderBoard,
  }

})();

module.exports = leaderBoardModule;


// console.log(text); will return undefined