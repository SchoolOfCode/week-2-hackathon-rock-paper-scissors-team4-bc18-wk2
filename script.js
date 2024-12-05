/*
let computerMove = "paper";
*/
let playerMove = prompt("rock, paper, scissors?");
const moves = ["rock", "paper", "scissors"];
let computerMove = moves[Math.floor(Math.random() * moves.length)];

function getWinner(playerMove, computerMove) { 
    if (playerMove == computerMove) {
        alert("0");
    }
    else {
        if (playerMove == "rock" && computerMove == "paper"){
        alert("-1");
    }
    else if (playerMove == "rock" && computerMove == "scissors"){
        alert("+1");
    }
    else if (playerMove == "paper" && computerMove == "rock"){
        alert("+1");
    }
    else if (playerMove == "paper" && computerMove == "scissors"){
        alert ("-1");
    }
    else if (playerMove == "scissors" && computerMove == "rock"){
        alert("-1");
    }
    else if (playerMove == "scissors" && computerMove == "paper"){
        alert("+1");
    }
    }  
}

getWinner (playerMove, computerMove);