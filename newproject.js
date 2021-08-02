
function computerPlay() {
  let randNum =  Math.floor(Math.random() * 3);
    if (randNum === 0) {
        return "rock";
    }
    else if (randNum === 1){
        return "paper"
    }
    else {
        return "scissors"
    }
}   

    function playRound(playerSelection, computerSelection) {
          
            if (playerSelection == "rock" && computerSelection == "rock") {
                return "Draw"
            }
            else if (playerSelection == "rock" && computerSelection == "paper") {
                return "You lost"
            }
            else if (playerSelection == "rock" && computerSelection == "scissors") {
                return "You Won"
            }
            else if (playerSelection == "paper" && computerSelection == "paper") {
                return "Draw"
            }
            else if (playerSelection == "paper" && computerSelection == "scissors") {
                return "You lost"
            }
            else if (playerSelection == "paper" &&  computerSelection == "rock") {
                return "You Won"
            }
            else if (playerSelection == "scissors" && computerSelection == "scissors") {
                return "Draw"
            }
            else if (playerSelection == "scissors" && computerSelection == "rock") {
                return "You lost"
            }
            else if (playerSelection == "scissors" &&  computerSelection == "paper") {
                return "You Won"
            }
            else {
                return "something wrong"
            }

    }

const computerSelection = computerPlay();


console.log(playRound(playerSelection, computerSelection));