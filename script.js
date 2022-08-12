let playerWins = 0;
let computerWins = 0;
let tieGames = 0;

function getComputerChoice(){
    let choiceInNum = Math.random();
    let choiceInString = "None";
    if (choiceInNum <= 0.33){
        choiceInString = "rock";
    } else if (choiceInNum <= 0.66){
        choiceInString = "paper";
    } else {
        choiceInString = "scissors";
    }
    return choiceInString;
}

function playSingleRound(){
    let computerSelection = getComputerChoice();
    let playerSelectionRaw = prompt("Enter your choice");
    let playerSelection = playerSelectionRaw.toLowerCase();

    if (computerSelection == "rock"){
        if (playerSelection == "paper"){
            playerWins = playerWins + 1;
            return `You win! ${playerSelection} beats ${computerSelection}.`
        } else if (playerSelection == "scissors"){
            computerWins = computerWins + 1;
            return `You lose! ${computerSelection} beats ${playerSelection}.`
        } else {
            tieGames = tieGames + 1;
            return `You tied!`
        }
    } else if (computerSelection == "paper"){
        if (playerSelection == "scissors"){
            playerWins = playerWins + 1;
            return `You win! ${playerSelection} beats ${computerSelection}.`
        } else if (playerSelection == "rock"){
            computerWins = computerWins + 1;
            return `You lose! ${computerSelection} beats ${playerSelection}.`
        } else {
            tieGames = tieGames + 1;
            return `You tied!`
        }
    } else {
        if (playerSelection == "rock"){
            playerWins = playerWins + 1;
            return `You win! ${playerSelection} beats ${computerSelection}.`
        } else if (playerSelection == "paper"){
            computerWins = computerWins + 1;
            return `You lose! ${computerSelection} beats ${playerSelection}.`
        } else {
            tieGames = tieGames + 1;
            return `You tied!`
        }
    }
}

function game(){
    for (let i = 0; i < 5; i++){
        console.log(playSingleRound());
    }
    console.log(`Final Stats: You won ${playerWins} games. You lost ${computerWins} games. You tied ${tieGames} games.`)
    if (playerWins > computerWins){
        console.log("Overall Winner: You");
    } else if (computerWins > playerWins){
        console.log("Overall Winner: Computer");
    } else {
        console.log("No overall winner.")
    }
}

game();



