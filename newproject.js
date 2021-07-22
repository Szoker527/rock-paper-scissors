const Arry = ['rock', 'paper', 'scissors']; 

function computerPlay() {
   return Arry[Math.floor(Math.random()*Arry.length)];
} 


const computerSelection = computerPlay();
    //console.log(playRound(playerSelection, computerSelection));