
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
    };
    "sdasd"
}   

    function playRound(playerSelection, computerSelection) {
          
            if (playerSelection.toLowerCase() == "rock" && computerSelection == "rock") {
                return alert("Draw")
            }
            else if (playerSelection.toLowerCase() == "rock" && computerSelection == "paper") {
                return alert("You lost")
            }
            else if (playerSelection.toLowerCase() == "rock" && computerSelection == "scissors") {
                return alert("You Won")
            }
            else if (playerSelection.toLowerCase() == "paper" && computerSelection == "paper") {
                return alert("Draw")
            }
            else if (playerSelection.toLowerCase() == "paper" && computerSelection == "scissors") {
                return alert("You lost")
            }
            else if (playerSelection.toLowerCase() == "paper" &&  computerSelection == "rock") {
                return alert("You Won")
            }
            else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "scissors") {
                return alert("Draw")
            }
            else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "rock") {
                return alert("You lost")
            }
            else if (playerSelection.toLowerCase() == "scissors" &&  computerSelection == "paper") {
                return alert("You Won")
            }
            else {
                return alert("something wrong")
            }

    }

    function game(){
        let playerSelection = prompt("Rock?  Paper?  Scissors?")
        
        return playRound(playerSelection, computerSelection)

    }

    

const computerSelection = computerPlay();


console.log(playRound(playerSelection, computerSelection));