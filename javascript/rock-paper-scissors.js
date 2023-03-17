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
    playerSelection = playerPrompt;
    computerSelection = getComputerChoice();

    let frmtText1 = playerSelection.charAt(0).toUpperCase();
    let frmtText2 = playerSelection.substr(1).toLowerCase();
    let pChoice = frmtText1 + frmtText2;

    console.log("You chose: " + pChoice + " computer chose: " + computerSelection);
}

playRound();
