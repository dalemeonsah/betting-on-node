var leaderboard = require('./leaderboard.js');

//npm prompt-sync
var prompt = require('prompt-sync')();

//npm color
var colors = require('colors');
var name = prompt("Please enter your name: ", "");
var bankroll = 50;
var highestScore = 50;
do {
  // Bet is between 5 and 10
  var bet = +(prompt("Place your bet between 5 and 10: ",""));
  if(bet > 4 && bet < 11){
    var guess = +(prompt("Guess random number between 1 and 10: ",""));
    if (guess > 0 && guess < 11){
      var game = Math.floor((Math.random() * 10) + 1);
      if (guess == game){
        bankroll += bet;
        console.log(colors.green("AWESOME now your money is: " + bankroll));
        // highest score
        if(bankroll > highestScore){
          highestScore = bankroll;
        }
      }
      else if(Math.abs(guess - game) == 1){
        console.log(colors.bgCyan("You dont lose any money: " + bankroll));
      }
      else {
        bankroll -= bet;
        console.log(colors.red("WRONG now your money is: " + bankroll + ", the number was: " + game));
      }
    }
    else{
      console.log("Please only guess number between 1 and 10!");
    }
  }
  else{
    console.log("Please only put bet between 5 and 10!");
  }
} while (bankroll > 0);

if (bankroll <= 0) {
  console.log("Game is ended");
  leaderboard.update(name, highestScore);
  leaderboard.display();
}

console.log("You are bankcrupt!");

// var stats = {
//   name: name,
//   score: highestScore
// }

