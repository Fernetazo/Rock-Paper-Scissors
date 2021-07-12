let cpuOptions = ['rock', 'paper', 'scissors'];

function computerPlay(max){
    return Math.floor(Math.random() * max);
}

function playRound(playerSelection, computerSelection){
    if (playerSelection == computerSelection){
        return ("It's a tie!");
    }
    if (playerSelection == 'rock' & computerSelection == 'paper'){
        return ("You Lose! Paper beats Rock");
    }
    if (playerSelection == 'paper' & computerSelection == 'scissors'){
        return ("You Lose! Scissors beats Paper");
    }
    if (playerSelection == 'scissors' & computerSelection == 'rock'){
        return ("You Lose! Rock beats Scissors");
    }
    if (playerSelection == 'rock' & computerSelection == 'scissors'){
        return ("You Win! Rock beats Scissors");
    }
    if (playerSelection == 'paper' & computerSelection == 'rock'){
        return ("You Win! Paper beats Rock");
    }
    if (playerSelection == 'scissors' & computerSelection == 'paper'){
        return ("You Win! Scissors beats Paper");
    }
}

function Game (){
    let win = 0;
    let lose = 0;
    for (let i = 0; i < 5; i++){
        const playerSelection = prompt("Input your play").toLowerCase();
        const computerSelection = cpuOptions[computerPlay(3)];
        console.log(result = playRound(playerSelection, computerSelection));
        if (result.includes("Win")){
            win++;
        }
        if (result.includes("Lose")){
            lose++;
        }
    }
    if (win > lose){
        console.log("You WIN the match!!! :)");
    }
    else if (win < lose){
        console.log("You LOSE the match... :(");
    }
    else{
        console.log("TIEEE!");
    }
}

console.log("Welcome!");
Game();