let winner;
let winCount = 0;
let loseCount = 0;
let tieCount = 0;

function getComputerChoice(){
    let randInt = Math.floor(Math.random() * 3) +1;
    let oppsChoice;

    if (randInt == 1){
        oppsChoice = "Rock";
    } else if (randInt == 2){
        oppsChoice = "Paper";
    } else {
        oppsChoice = "Scissors";
    }
    
    return oppsChoice;
}

function playRound(playerSelection, computerSelection){
    let playerPrompt = prompt("Rock Paper Scissors?");
    computerSelection = getComputerChoice();

    let frmtText1 = playerPrompt.charAt(0).toUpperCase();
    let frmtText2 = playerPrompt.substr(1).toLowerCase();
    let pChoice = frmtText1 + frmtText2;
    playerSelection = pChoice;

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

    console.log("You chose: " + playerSelection + " computer chose: " + computerSelection);
    console.log(winner);

}

function roundWinner(){
    console.log("Number of wins: " + winCount + " Number of losses: " + loseCount + " Number of ties: " + tieCount)
    
    if (winCount > loseCount){
        console.log("You lose the game")
    } else {
        console.log("You lose the game")
    }
}

function game(){
    for (let i = 0; i < 5; i++){
        playRound();
    }
}

game();
roundWinner();