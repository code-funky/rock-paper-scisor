
// This function call return random choice of 'rock', 'paper', 'scissor'//
function randomSelection() {
    let choice = ['rock', 'paper', 'scissor'];
    let randomChoice = choice[Math.floor(Math.random()*choice.length)];
    return randomChoice;
}
// End of function//

function game() {
    let winCount = 0;
    let loseCount = 0;
    for (let i = 0; i < 5; i++) {
        let playerSelection = "";
        let computerSelection = randomSelection();
        let validInput = false;
        while (!validInput) {
            playerSelection = prompt("Please input your choice", "");
            
            // This function call compare player input and computer input and output result//
            function playRound(playerSelection, computerSelection) {
                if (playerSelection === computerSelection) {
                    return("It's a draw!");
                } else if ( (playerSelection === "rock" && computerSelection === "scissor") ||
                            (playerSelection === "paper" && computerSelection === "rock") ||
                            (playerSelection === "scissor" && computerSelection === "paper")
                ) {
                    return("You win!");
                } else 
                  return("You lose!");
            }
            // End of function//

            if (playerSelection !== null && playerSelection !== "") {
                playerSelection = playerSelection.toLowerCase();
                    if (playerSelection === "rock" || playerSelection === "paper" || playerSelection === "scissor") {
                        validInput = true;
                        console.log("Round " + (i+1))
                        console.log("Player: " + playerSelection)
                        console.log("Computer: " + computerSelection)
                        let result = playRound(playerSelection, computerSelection);
                        console.log("Result: " + result)
                        if (result === "You win!") {
                            winCount++;
                            console.log("You: " + winCount);
                            console.log("Computer: " + loseCount)
                        } else if (result === "You lose!") {
                            loseCount++;
                            console.log("You: " + winCount);
                            console.log("Computer: " + loseCount)
                        } else {
                            console.log("You: " + winCount);
                            console.log("Computer: " + loseCount)                            
                        }
                    } else alert('Input must be either one of the following \nrock\npaper\nscissor')
            } else if (playerSelection === null) {
                console.log("Player has quit the game")
                return;
            } else alert("Input can't be empty");
        } 
    }    
    if (winCount > loseCount) {
        console.log(winCount + " out of 5! You won the game! Congratulation!")
    } else if (winCount < loseCount) {
        console.log(winCount + " out of 5! You lose the game! Better luck next time.")
    } else {console.log("It's a draw! Click the button to try again!")}
}


let startButton = document.getElementById("inputButton");
startButton.addEventListener("click", game);
