/*
let playerMove = "rock";
let computerMove = "paper";
*/

function getWinner(playerMove, computerMove) { 
    if (playerMove == computerMove) {
        return ("0");
    }
    else {
        if (playerMove == "rock" && computerMove == "paper"){
        return ("-1");
    }
    else if (playerMove == "rock" && computerMove == "scissors"){
        return ("+1");
    }
    else if (playerMove == "paper" && computerMove == "rock"){
        return ("+1");
    }
    else if (playerMove == "paper" && computerMove == "scissors"){
        return("-1");
    }
    else if (playerMove == "scissors" && computerMove == "rock"){
        return("-1");
    }
    else if (playerMove == "scissors" && computerMove == "paper"){
        return ("+1");
    }
    }  
}
