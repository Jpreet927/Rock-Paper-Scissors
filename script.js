function computerPlay() {
    const selection = ['rock', 'paper', 'scissors'];
    var computerMove = selection[Math.floor(Math.random() * 3)];

    return computerMove;
}

function playRound(playerSelection, computerSelection) {
    // your code here!
    var playerSelectionString = playerSelection.toString().toLowerCase();
    var computerSelectionString = computerSelection.toString().toLowerCase();

    if (playerSelection === computerSelection){
        return "draw";
    } else if (
            (playerSelection === 'rock' && computerSelection === 'scissors') || 
            (playerSelection === 'scissors' && computerSelection === 'paper') || 
            (playerSelection === 'paper' && computerSelection === 'rock')
    ){
        return "player";
    } else {
        return "computer";
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let computerMove = '';
    let playerMove = '';
    let roundResult = '';

    while (playerScore < 3 && computerScore < 3){
        // playerMove = prompt('Enter your move:');
        playerMove = computerPlay();
        computerMove = computerPlay();

        roundResult = playRound(playerMove, computerMove);

        if (roundResult === 'player'){
            playerScore++;
            console.log("You won the round. Score:" + playerScore + " - " + computerScore);
        } else if (roundResult === 'computer'){
            computerScore++;
            console.log("The computer won the round. Score: " + playerScore + " - " + computerScore);
        } else if (roundResult === 'draw'){
            console.log("Draw!");
        }
    }

    if (playerScore === 3){
        console.log("You win!");
    } else if (computerScore === 3) {
        console.log("The Computer Won.");
    }

}

// result = playRound('scissors', 'paper');
// console.log(result);

game()