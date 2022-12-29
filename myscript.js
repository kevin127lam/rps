/**
 * 0 = Rock
 * 1 = Paper
 * 2 = Scissors
 */
function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    switch (choice) {
        case 0:
            return "Rock";
            break;
        case 1:
            return "Paper";
            break;
        case 2:
            return "Scissors";
            break;
    }
}

function playRound(playerSelection, computerSelection) {
    if (computerSelection.toLowerCase() === playerSelection.toLowerCase()) {
        console.log("Tie! You both got " + computerSelection);
        return 0;
        //winning conditions
    } else if ((playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "scissors") || (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "rock") || (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "paper")) {
        console.log("You win, " + playerSelection.toLowerCase() + " beats " + computerSelection);
        return 1;
    } else {//losing conditions
        console.log("You lose, " + computerSelection + " beats " + playerSelection.toLowerCase());
        return 2;
    }
}

function game() {
    for (let index = 0; index < 5; index++) {
        let playerSelection = prompt("Please enter your choice: ");
        let computerChoice = getComputerChoice();
        let numTie = 0, wins = 0, losses = 0;
        switch (playRound(playerSelection, computerChoice)) {
            case 0:
                numTie++;
                break;
            case 1:
                wins++;
                break;
            case 2: losses++;
                break;
        }
    }
}
game();