let userName = prompt(`Hi, what's your name?

    Your username:
    - can be up to 10 characters long;
    - should only start with letters, not numbers or symbols; 
    - should be capitalised.`);

function onlyLetters(userName) {
    return Boolean(userName.match(/^[A-Za-z]/));
    }
    
function Capitalised(userName){
    return Boolean(userName.match(/^[A-Z]/));
}

while ((userName.length > 10) || (onlyLetters(userName) == false) || (Capitalised(userName) == false)) {
    alert("Sorry, your name doesn't meet the criteria");
    userName = prompt(`Hi, what's your name?

        Your username:
        - can be up to 10 characters long;
        - should only start with letters, not numbers or symbols; 
        - should be capitalised.`);
        
    if ((userName.length <=10) && (onlyLetters(userName) == true) && (Capitalised(userName) == true)) {
        break;
    }
}

let numberGames = 1;
let wins = 0;
let draws = 0;
let losses = 0;
let score = 0;
let playAgain = true;
    
while (playAgain == true) {
let playerMove = prompt(`Hi ${userName}! What's your move? Pick rock, paper or scissors`);
const moves = ["rock", "paper", "scissors"];
let computerMove = moves[Math.floor(Math.random() * moves.length)];
    
function getWinner(playerMove, computerMove) { 
    if (playerMove == computerMove) {
        alert(`The computer chose ${computerMove}. It's a draw! We'll add 0 to your score.`);
        draws++;
    }
    else if ((playerMove == "rock" && computerMove == "paper") || (playerMove == "paper" && computerMove == "scissors") || (playerMove == "scissors" && computerMove == "rock")) {
        alert(`The computer chose ${computerMove}. You lose! We'll remove 1 to your score.`);
        losses++;
        score--;
        }
    else {
        alert(`The computer chose ${computerMove}. You win! We'll add 1 to your score.`);
        wins++;
        score++;
    }
}
    
getWinner (playerMove, computerMove);
alert(`${userName}, you played ${numberGames} games. You won ${wins}, drew ${draws} and lost ${losses} games. Your score is ${score}.`)
playAgain = confirm("Do you want to play again?");
    
if (playAgain == true) {
    numberGames++;
}
else {
    alert(`Game over ${userName}. Your final score is ${score}. You won ${wins}, drew ${draws} and lost ${losses} games.`);
}
}