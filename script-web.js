let humanScore = 0;
let robotScore = 0;
let robotMove = '';
let humanMove = '';
let roundResult = '';

const humanScore_span = document.getElementById("score-human");
const robotScore_span = document.getElementById("score-robot");
const roundResult_div = document.querySelector("match-result");

const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

function robotPlay() {
    const selection = ['rock', 'paper', 'scissors'];
    var robotMove = selection[Math.floor(Math.random() * 3)];

    return robotMove;
}

function playRound(humanSelection, robotSelection) {
    // your code here!
    var humanSelectionString = humanSelection.toString().toLowerCase();
    var robotSelectionString = robotSelection.toString().toLowerCase();

    if (humanSelectionString === robotSelectionString){
        return "draw";
    } else if (
            (humanSelectionString === 'rock' && robotSelectionString === 'scissors') || 
            (humanSelectionString === 'scissors' && robotSelectionString === 'paper') || 
            (humanSelectionString === 'paper' && robotSelectionString === 'rock')
    ){
        return "human";
    } else if (
            (humanSelectionString === 'scissors' && robotSelectionString === 'rock') || 
            (humanSelectionString === 'paper' && robotSelectionString === 'scissors') || 
            (humanSelectionString === 'rock' && robotSelectionString === 'paper')
    ){
        return "robot";
    } else {
        return "invalid"
    }
}

function game() {
    while (humanScore < 3 && robotScore < 3){

        robotMove = robotPlay();

        roundResult = playRound(humanMove, robotMove);

        if (roundResult === 'human'){
            humanScore++;
            console.log("You won the round. Score:" + humanScore + " - " + robotScore);
        } else if (roundResult === 'robot'){
            robotScore++;
            console.log("The robot won the round. Score: " + humanScore + " - " + robotScore);
        } else if (roundResult === 'draw') {
            console.log("Draw!");
        } else if (roundResult === 'invalid') {
            console.log("Invalid Entry, choose from Rock, Paper, or Scissors")
        }
    }

    if (humanScore === 3){
        console.log("You win!");
    } else if (robotScore === 3) {
        console.log("The Robot Won.");
    }

}


// CLICK EVENT LISTENERS


// result = playRound('scissors', 'paper');
// console.log(result);