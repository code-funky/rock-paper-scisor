function getComputerChoice () {
    let choice = [
        'rock',
        'paper',
        'scissor'
    ];
    let computerSelection = choice[Math.floor(Math.random()*choice.length)];
    return computerSelection;
}


// play game againts CPU//
// scenerio 1: player choice = CPU choice "Result: Draw!"
// scenerio 2: player choice = rock
//      CPU choice = paper "Result: Lose!"
//      CPU choice = scissor "Result: Win!"
// scenerio 3: player choice = paper
//      CPU choice = scissor "Result: Lose!"
//      CPU choice = rock "Result: Win!"
// scenerio 4: player choice = scissor
//      CPU choice = rock "Result: Lose!"
//      CPU choice = paper "Result: Win!"
// scenerio 5: player choice = invalid "Result: Invalid choice!"

let playerSelection = prompt("Please input your choice", "");


function playGame(playerSelection, computerSelection) {
    if playerSelection === computerSelection
}

playGame();