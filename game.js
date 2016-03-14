//npm prompt-sync
var prompt = require('prompt-sync')();

var bankroll = 100;
do {
  // Bet is between 5 and 10
  var bet = prompt("Place your bet between 5 and 10","");
  if(bet > 4 && bet < 11){
    var guess = prompt("Guess random number between 1 and 10","");
    if (guess > 0 && guess < 11){
      var game = Math.floor((Math.random() * 10) + 1);
      if (guess === game){
        bankroll += bet;
        console.log("AWESOME now your money is: " + bankroll);
      }
      else if(Math.abs(guess - game) === 1){
        console.log("You dont lose any money: " + bankroll);
      }
      else {
        bankroll -= bet;
        console.log("WRONG now your money is: " + bankroll);
      }
    }
    else{
      console.log("Please only guess number between 1 and 10");
    }
  }
  else{
    console.log("Please only put bet between 5 and 10");
  }
}while (bankroll > 0);