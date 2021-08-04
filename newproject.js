
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
    let score

    let playerSelection = prompt("Rock?  Paper?  Scissors?");
     computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));

    playerSelection = prompt("Rock?  Paper?  Scissors?");
     computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
    
    playerSelection = prompt("Rock?  Paper?  Scissors?");
     computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
    
    playerSelection = prompt("Rock?  Paper?  Scissors?");
     computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));

    playerSelection = prompt("Rock?  Paper?  Scissors?");
     computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
    }

function game1() {
    playerSelection = prompt("Rock?  Paper?  Scissors?");
    let score 
    score = playRound(playerSelection, computerSelection);

    if (score == "You lost") {
        alert("0:1")
    }
    else if (score == "You Won") {
        alert("1:0")
    }
    else if (score == "Draw") {
        alert("0:0")
    }
    else {
        alert("something wrong")
    }
}


    function playRound(playerSelection, computerSelection) {
          
            if (playerSelection.toLowerCase() == "rock" && computerSelection == "rock") {
                 alert("Draw")
            }
            else if (playerSelection.toLowerCase() == "rock" && computerSelection == "paper") {
                 alert("You lost")
            }
            else if (playerSelection.toLowerCase() == "rock" && computerSelection == "scissors") {
                 alert("You Won")
            }
            else if (playerSelection.toLowerCase() == "paper" && computerSelection == "paper") {
                 alert("Draw")
            }
            else if (playerSelection.toLowerCase() == "paper" && computerSelection == "scissors") {
                 alert("You lost")
            }
            else if (playerSelection.toLowerCase() == "paper" &&  computerSelection == "rock") {
                 alert("You Won")
            }
            else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "scissors") {
                 alert("Draw")
            }
            else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "rock") {
                 alert("You lost")
            }
            else if (playerSelection.toLowerCase() == "scissors" &&  computerSelection == "paper") {
                 alert("You Won")
            }
            else {
                 alert("something wrong")
            }

    }


    let computerSelection = computerPlay();