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
      // var dataStr = data.toString();
      // var player = dataStr.indexOf(playerName);
      //TODO: write into that line
      if (index >= 0){
        // exists, update the score
        data[Object.keys(data)[index]] = highScore;
      } else {
        // append the new player and the score
        data.playerName = highScore;
      }
      list = data;
      jsonfile.writeFile('fileJson', list, function(err){
        console.log(err);
      })
    });   
  }

  function  _displayLeaderBoard() {
    // read the file and display
    fs.readFile(fileJson, function displaySuccess(err, data){
      if(err) return console.error(err);
      var displayLdb = data.toString();
      console.log(displayLdb);
    });
  }

  function init() {
    _displayLeaderBoard();
  }

  init();

  return {
    update: _updateLeaderBoard,
    display: _displayLeaderBoard,
  }

})();

module.exports = leaderBoardModule;


// console.log(text); will return undefined