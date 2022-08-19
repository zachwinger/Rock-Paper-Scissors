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

function playSingleRound(playerSelection){
    let computerSelection = getComputerChoice();

    if (computerSelection == "rock"){
        if (playerSelection == "paper"){
            playerWins = playerWins + 1;
            roundResult.textContent = `You win! ${playerSelection} beats ${computerSelection}.`;
            score.textContent = `Player: ${playerWins} Computer: ${computerWins} Ties: ${tieGames}`
        } else if (playerSelection == "scissors"){
            computerWins = computerWins + 1;
            roundResult.textContent = `You lose! ${computerSelection} beats ${playerSelection}.`
            score.textContent = `Player: ${playerWins} Computer: ${computerWins} Ties: ${tieGames}`
        } else {
            tieGames = tieGames + 1;
            roundResult.textContent = `You tied!`;
            score.textContent = `Player: ${playerWins} Computer: ${computerWins} Ties: ${tieGames}`
        }
    } else if (computerSelection == "paper"){
        if (playerSelection == "scissors"){
            playerWins = playerWins + 1;
            roundResult.textContent = `You win! ${playerSelection} beats ${computerSelection}.`
            score.textContent = `Player: ${playerWins} Computer: ${computerWins} Ties: ${tieGames}`
        } else if (playerSelection == "rock"){
            computerWins = computerWins + 1;
            roundResult.textContent = `You lose! ${computerSelection} beats ${playerSelection}.`
            score.textContent = `Player: ${playerWins} Computer: ${computerWins} Ties: ${tieGames}`
        } else {
            tieGames = tieGames + 1;
            roundResult.textContent = `You tied!`
            score.textContent = `Player: ${playerWins} Computer: ${computerWins} Ties: ${tieGames}`
        }
    } else {
        if (playerSelection == "rock"){
            playerWins = playerWins + 1;
            roundResult.textContent = `You win! ${playerSelection} beats ${computerSelection}.`
            score.textContent = `Player: ${playerWins} Computer: ${computerWins} Ties: ${tieGames}`
        } else if (playerSelection == "paper"){
            computerWins = computerWins + 1;
            roundResult.textContent = `You lose! ${computerSelection} beats ${playerSelection}.`
            score.textContent = `Player: ${playerWins} Computer: ${computerWins} Ties: ${tieGames}`
        } else {
            tieGames = tieGames + 1;
            roundResult.textContent = `You tied!`
            score.textContent = `Player: ${playerWins} Computer: ${computerWins} Ties: ${tieGames}`
        }
    }

    if (playerWins == 5 || computerWins == 5){
        if (playerWins == 5){
            winnerName = 'You'
            winner.textContent = "You are the winner!";
        } else {
            winner.textContent = "The computer is the winner!";
        }
    }
}

const roundResult = document.createElement('div');
roundResult.classList.add('resultText');
container.appendChild(roundResult);

const score = document.createElement('div');
score.classList.add('resultText');
container.appendChild(score);

const winner = document.createElement('div');
winner.classList.add('resultText');
container.appendChild(winner)

const buttons = document.querySelectorAll('button');

buttons.forEach(button =>{
    button.addEventListener('click', e => {
        playSingleRound(button.value)
    })
});






