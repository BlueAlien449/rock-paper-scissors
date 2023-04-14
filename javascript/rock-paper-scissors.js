let winner;
let winCount = 0;
let loseCount = 0;
let tieCount = 0;

let buttons = document.getElementsByTagName('button');
let playerChoice;
let buttonPressed = e => {
    playerChoice = e.target.id;
}

for (let button of buttons) {
    button.addEventListener('click', buttonPressed)
}

function getComputerChoice(){
    let randInt = Math.floor(Math.random() * 3) +1;
    let oppsChoice;

    if (randInt == 1) oppsChoice = "Rock";
    else if (randInt == 2) oppsChoice = "Paper";
    else oppsChoice = "Scissors";
    return oppsChoice;
}

let choiceList = document.querySelectorAll('.choice');
choiceList.forEach(key => key.addEventListener('click', game));


function playRound(playerSelection, computerSelection){

    playerSelection = playerChoice;
    computerSelection = getComputerChoice();

    if (playerSelection === "Rock" && computerSelection === "Scissors"){
        winner = "You win, rock beats scissors";
        winCount++;
    } else if (playerSelection === "Paper" && computerSelection === "Rock"){
        winner = "You win, paper beats to rock";
        winCount++;
    } else if (playerSelection === "Scissors" && computerSelection === "Paper"){
        winner = "You lose, scissors beats paper";
        winCount++;
    } else if (playerSelection === computerSelection){
        winner = "Tie, no one wins"
        tieCount++;
    } else {
        winner = "You lose"
        loseCount++;
    }

    let gameSelection = document.querySelector('.gameSelection');
    let roundWinner = document.querySelector('.roundWinner');
    gameSelection.textContent = "You chose: " + playerSelection + " computer chose: " + computerSelection
    roundWinner.textContent = winner;
}

function roundWinner(){
    let gameInfo = document.querySelector('.gameInfo');
    let gameWinner = document.querySelector('.gameWinner');

    if (winCount == 5){
        gameInfo.textContent = "Number of wins: " + winCount + " Number of losses: " + loseCount + " Number of ties: " + tieCount
        
        if (winCount > loseCount) gameWinner.textContent = "You win the game!";
        else if (winCount === loseCount) gameWinner.textContent = "It's a tie! No one wins";
        else gameWinner.textContent = "You lose!";
    } 
    else return;
}

function game(){
    let gamePoints = document.querySelector('.gamePoints');

    if (winCount < 5) {
        playRound(); 
        gamePoints.textContent = winCount;
    }
    else return;
    roundWinner()
}




