function computerPlay() {
    const randomNum012 = Math.floor(Math.random() * 3);
    switch (randomNum012) {
        case 0: return "Rock";
        case 1: return "Paper";
        case 2: return "Scissors";
    }
}
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'Tie';
    } else if (playerSelection === "Rock" && computerSelection === "Scissors" ||
        playerSelection === "Scissors" && computerSelection === "Paper" ||
        playerSelection === "Paper" && computerSelection === "Rock") {
        updateScore(userScore);
        return 'You win'; 
    } else {
        updateScore(pcScore);
        return 'Machine wins'; 
    }
}
function firstOnlyCapital(inputString) {
    return inputString.charAt(0).toUpperCase() + inputString.slice(1);
}

const showPlayerSelection = document.querySelector('.playerSelection');
const showPcSelection = document.querySelector('.pcSelection');
const showWinner = document.querySelector('.winner');
const roundCount = document.querySelector('.roundCount');
const userScore = document.querySelector('.userScore');
const pcScore = document.querySelector('.pcScore');
const gameBtns = document.querySelectorAll('.gameButtons > button');

function updateScore(playerScore) {
    playerScore.textContent = +playerScore.textContent + 1;
    if (playerScore.textContent == 5) {
        showWinner.style.cssText = 'font-weight:bold';
        //disable event listeners on buttons
        gameBtns.forEach(btn => btn.removeEventListener('click', updateRound));
    }
}

function updateRound() {
    const playerSelection = this.classList.toString();
    const computerSelection = computerPlay();

    showPlayerSelection.textContent = playerSelection;
    showPcSelection.textContent = computerSelection;

    showWinner.textContent = playRound(playerSelection, computerSelection);
    roundCount.textContent = +roundCount.textContent + 1;
}

gameBtns.forEach(btn => btn.addEventListener('click', updateRound));
