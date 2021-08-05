
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
function game(){
    playerScore = 0;
    computerScore = 0;
    gameCount = 0;
    games();
    games();
    games();
    games();
    games();
    FullScore = finalScore()
    function finalScore(){
        if (playerScore > computerScore) {
            alert("Congrats you won!")
        }
        else if (playerScore < computerScore) {
            alert("You lost!")
        }
        else {
            alert("Thats suprising")
        }
    }

    }

function games() {
    playerSelection = prompt("Rock?  Paper?  Scissors?");
    computerSelection = computerPlay();
    let score 
    score = playRound(playerSelection, computerSelection);
    
    if (score == "You lost") {
        gameCount++;
        computerScore++;
        alert("Game Score:" + " " + playerScore + " "  + ":" + " " + computerScore + " " + "Game Round:" + " " + gameCount)
    }
    else if (score == "You Won") {
        gameCount++;
        playerScore++;
        alert("Game Score:" + " " +playerScore + " "  + ":" + " " + computerScore + " " + "Game Round:" + " " + gameCount)
    }
    else if (score == "Draw") {
        gameCount++;
        alert("Game Score:" + " " +playerScore + " "  + ":" + " "  + computerScore + " " + "Game Round:" + " " + gameCount)
    }
    else {
        alert("You can't fight with this!" + " " + "Game Round:" + " " + gameCount)
    }
}


    function playRound(playerSelection, computerSelection) {
          
            if (playerSelection.toLowerCase() == "rock" && computerSelection == "rock") {
                alert("Draw! Try Again")
                return "Draw"
            }
            else if (playerSelection.toLowerCase() == "rock" && computerSelection == "paper") {
                alert("You Lose! Paper beats Rock")
                return "You lost"
            }
            else if (playerSelection.toLowerCase() == "rock" && computerSelection == "scissors") {
                alert("You Won! Rock beats Scissors")
                return "You Won"
            }
            else if (playerSelection.toLowerCase() == "paper" && computerSelection == "paper") {
                alert("Draw! Try Again")
                return "Draw"
            }
            else if (playerSelection.toLowerCase() == "paper" && computerSelection == "scissors") {
                alert("You Lose! Scissors beats Paper")
                return "You lost"
            }
            else if (playerSelection.toLowerCase() == "paper" &&  computerSelection == "rock") {
                alert("You Won! Paper beats Rock")
                return "You Won"
            }
            else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "scissors") {
                alert("Draw! Try Again")
                return "Draw"
            }
            else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "rock") {
                alert("You Lose! Rock beats Scissors")
                return "You lost"
            }
            else if (playerSelection.toLowerCase() == "scissors" &&  computerSelection == "paper") {
                alert("You Won! Scissors beats Paper")
                return "You Won"
            }

    }


    let computerSelection = computerPlay();

    console.log(game());