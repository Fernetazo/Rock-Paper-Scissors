let cpuOptions = ['rock', 'paper', 'scissors'];
let win = 0;
let lose = 0;
currentResult = document.getElementById("currentResult");
roundResult = document.getElementById("roundResult");
finalResult = document.getElementById("finalResult");

const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', playRound));

function computerPlay(max){
    return Math.floor(Math.random() * max);
}

function playRound(playerSelection, computerSelection){

    playerSelection = playerSelection.target.id;
    computerSelection = cpuOptions[computerPlay(3)];

    if (win === 0 && lose === 0){
        finalResult.textContent = "";
    }
    if (playerSelection == computerSelection){
        roundResult.textContent = "It's a tie!";
    }
    if (playerSelection == 'rock' & computerSelection == 'paper'){
        roundResult.textContent = "You Lose! Paper beats Rock";
        lose++;
    }
    if (playerSelection == 'paper' & computerSelection == 'scissors'){
        roundResult.textContent = "You Lose! Scissors beats Paper";
        lose++;
    }
    if (playerSelection == 'scissors' & computerSelection == 'rock'){
        roundResult.textContent = "You Lose! Rock beats Scissors";
        lose++;
    }
    if (playerSelection == 'rock' & computerSelection == 'scissors'){
        roundResult.textContent = "You Win! Rock beats Scissors";
        win++;
    }
    if (playerSelection == 'paper' & computerSelection == 'rock'){
        roundResult.textContent = "You Win! Paper beats Rock";
        win++;
    }
    if (playerSelection == 'scissors' & computerSelection == 'paper'){
        roundResult.textContent = "You Win! Scissors beats Paper";
        win++;
    }
    
    currentResult.textContent = `You ${win} - ${lose} CPU`;

    if (win === 5){
        finalResult.textContent = "You WIN the match!!! :)";
        win = 0;
        lose = 0;
    }
    else if (lose === 5){
        finalResult.textContent = "You LOSE the match... :(";
        win = 0;
        lose = 0;
    }
}