let humanScore = 0;
let robotScore = 0;
let robotMove = '';
let humanMove = '';
let roundResult = '';

// grabbing and caching DOM elements
const humanScore_span = document.getElementById("score-human");
const robotScore_span = document.getElementById("score-robot");
const roundResult_div = document.querySelector(".match-result");
const rpsOptions_div = document.querySelectorAll(".choice");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");
const tryAgain_btn = document.querySelector(".try-again-btn > .try-again")


// chooses robot move by randomly indexing options array
function robotPlay() {
    const options = ['rock', 'paper', 'scissors'];
    var robotMove = options[Math.floor(Math.random() * options.length)];

    return robotMove;
}


// determines the winner of a given round and incremements score
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

    checkScore();
}


// checks if the game has reached the end
function checkScore() {
    if (humanScore === 5){
        console.log("You win!");
        roundResult_div.textContent = "You win! Rejoice as the robots have been defeated.";
    } else if (robotScore === 5) {
        console.log("The Robot Won.");
        roundResult_div.textContent = "You lost. Humanity is done for, nice job! :)";
    }

    if (humanScore === 5 || robotScore === 5){
        for (var i = 0; i < rpsOptions_div.length; i++){
            rpsOptions_div[i].classList.add("game-finish");
        }
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

tryAgain_btn.addEventListener('click', () => {
    humanScore = 0;
    robotScore = 0;
    humanScore_span.textContent = humanScore;
    robotScore_span.textContent = robotScore;

    for (var i = 0; i < rpsOptions_div.length; i++){
        rpsOptions_div[i].classList.remove("game-finish");
    }
})