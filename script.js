
// This function call return random choice of 'rock', 'paper', 'scissor'//
function computerSelection () {
    let choice = ['rock', 'paper', 'scissor'];
    let randomChoice = choice[Math.floor(Math.random()*choice.length)];
    return randomChoice;
}
// End of function//

// This function call compare player input and computer input and output result//
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return("It's a draw!");
    } else if ( (playerSelection === "rock" && computerSelection === "scissor") ||
                (playerSelection === "paper" && computerSelection === "rock") ||
                (playerSelection === "scissor" && computerSelection === "paper")
    ) {
        return("You win!");
    } else if ( (playerSelection === "rock" && computerSelection === "paper") ||
                (playerSelection === "paper" && computerSelection === "scissor") ||
                (playerSelection === "scissor" && computerSelection === "rock")
    ) {
        return("You lose!");
    } else {return("Invalid input!")}
}
// End of function//



// End of variable declaration//

// This function display round score
function displayRoundScore() {console.log(playRound(playerSelection, computerSelection));};
// This function display total score
function displayTotalScore() {console.log("Win: " + winCount + " Lose: " + loseCount);};
// This function display 

function game() {
    let winCount = 0;
    let loseCount = 0;
    for (let i = 0; i < 5; i++) {
        // This function only accept one of the 3 valid value//
        let playerSelection = "";
        let validInput = false;    
        while (!validInput) {
            playerSelection = prompt("Please input your choice", "");
            if (playerSelection !== null && playerSelection !== "") {
                playerSelection = playerSelection.toLowerCase();
                    if (playerSelection === "rock" || playerSelection === "paper" || playerSelection === "scissor") {
                        validInput = true;
                    } else alert('Input must be either one of the following \nrock\npaper\nscissor')
            } else alert("Input can't be empty");
        } 
        let result = playRound(playerSelection, computerSelection);
        console.log("Player: " + playerSelection)
        console.log("Computer: " + computerSelection)
        console.log("Result: " + result)   
    } if (result === "You win!") {
        winCount++;
    } else if (result === "You lose!") {
        loseCount++;
    } 
    
    if (winCount > loseCount) {
        console.log(winCount + " out of 5! You won the game! Congratulation!")
    } else {
        console.log(winCount + " out of 5! You lose the game! Better luck next time.")
    }

}

let startButton = document.getElementById("inputButton");
startButton.addEventListener("click", game);

//click button to initiate game

//play game function
//  roundCount is less than 5
//      play a round of game
//          display the result of that round 
//  if 