let humanScore = 0;
let robotScore = 0;
let robotMove = '';
let humanMove = '';
let roundResult = '';

// grabbing and caching DOM elements
const humanScore_span = document.getElementById("score-human");
const robotScore_span = document.getElementById("score-robot");
const roundResult_div = document.querySelector(".match-result");
const rpsOptions_div = document.querySelectorAll("choice");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");


function robotPlay() {
    const options = ['rock', 'paper', 'scissors'];
    var robotMove = options[Math.floor(Math.random() * options.length)];

    return robotMove;
}

function playRound(humanSelection, robotSelection) {
    // your code here!
    var humanSelectionString = humanSelection.toString().toLowerCase();
    var robotSelectionString = robotSelection.toString().toLowerCase();

    if (humanSelectionString === robotSelectionString){
        roundResult_div.textContent = "It's a draw! Go again.";
    } else if (
            (humanSelectionString === 'rock' && robotSelectionString === 'scissors') || 
            (humanSelectionString === 'scissors' && robotSelectionString === 'paper') || 
            (humanSelectionString === 'paper' && robotSelectionString === 'rock')
    ){
        humanScore++;
        humanScore_span.textContent = humanScore;
        roundResult_div.textContent = "Nice! You won the round.";
    } else if (
            (humanSelectionString === 'scissors' && robotSelectionString === 'rock') || 
            (humanSelectionString === 'paper' && robotSelectionString === 'scissors') || 
            (humanSelectionString === 'rock' && robotSelectionString === 'paper')
    ){
        robotScore++;
        robotScore_span.textContent = robotScore;
        roundResult_div.textContent = "The robot won that round!";
    }

    if (humanScore === 5){
        console.log("You win!");
        roundResult_div.textContent = "You win! Rejoice as the robots have been defeated.";
        rock_div.disabled = true;
        paper_div.disabled = true;
        scissors_div.disabled = true;
    } else if (robotScore === 5) {
        console.log("The Robot Won.");
        roundResult_div.textContent = "You lost. Humanity will be eradicated because of you, nice job! :)";
        rock_div.disabled = true;
        paper_div.disabled = true;
        scissors_div.disabled = true;
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
rock_div.addEventListener('click', () => {
    humanMove = 'rock';
    robotMove = robotPlay();
    playRound(humanMove, robotMove);
})

paper_div.addEventListener('click', () => {
    humanMove = 'paper';
    robotMove = robotPlay();
    playRound(humanMove, robotMove);
})

scissors_div.addEventListener('click', () => {
    humanMove = 'scissors';
    robotMove = robotPlay();
    playRound(humanMove, robotMove);
})

// result = playRound('scissors', 'paper');
// console.log(result);