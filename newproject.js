
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
    FullScore = (playerScore,computerScore);
    games();
    games();
    games();
    games();
    games();
    console.log(alert(FullScore));

    }

function games() {
    playerSelection = prompt("Rock?  Paper?  Scissors?");
    computerSelection = computerPlay();
    let score 
    score = playRound(playerSelection, computerSelection);

    if (score == "You lost") {
        computerScore++;
        alert(FullScore)
    }
    else if (score == "You Won") {
        playerScore++;
        alert(FullScore)
    }
    else if (score == "Draw") {
        alert(FullScore)
    }
    else {
        alert("something wrong")
    }
}


    function playRound(playerSelection, computerSelection) {
          
            if (playerSelection.toLowerCase() == "rock" && computerSelection == "rock") {
                alert("Draw")
                return "Draw"
            }
            else if (playerSelection.toLowerCase() == "rock" && computerSelection == "paper") {
                alert("You lost")
                return "You lost"
            }
            else if (playerSelection.toLowerCase() == "rock" && computerSelection == "scissors") {
                alert("You Won")
                return "You Won"
            }
            else if (playerSelection.toLowerCase() == "paper" && computerSelection == "paper") {
                alert("Draw")
                return "Draw"
            }
            else if (playerSelection.toLowerCase() == "paper" && computerSelection == "scissors") {
                alert("You lost")
                return "You lost"
            }
            else if (playerSelection.toLowerCase() == "paper" &&  computerSelection == "rock") {
                alert("You Won")
                return "You Won"
            }
            else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "scissors") {
                alert("Draw")
                return "Draw"
            }
            else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "rock") {
                alert("You lost")
                return "You lost"
            }
            else if (playerSelection.toLowerCase() == "scissors" &&  computerSelection == "paper") {
                alert("You Won")
                return "You Won"
            }
            else {
                 alert("something wrong")
            }

    }


    let computerSelection = computerPlay();