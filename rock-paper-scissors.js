function computerPlay() {
    const randomNum012 = Math.floor(Math.random() * 3);
    switch (randomNum012) {
        case 0 : return "Rock";
        case 1 : return "Paper";
        case 2 : return "Scissors";
    }
}
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 0; //tie
    } else if (playerSelection === "Rock" && computerSelection === "Scissors" ||
        playerSelection === "Scissors" && computerSelection === "Paper" ||
        playerSelection === "Paper" && computerSelection === "Rock") {
        return 1; //user wins
    } else {
        return -1; //pc wins
    }
}
function firstOnlyCapital(inputString) {
    return inputString.charAt(0).toUpperCase() + inputString.slice(1);
}
function getTextResult(result) {
    switch (result) {
        case -1 : return 'You lose.';
        case 0 : return 'Tie.';
        case 1 : return 'You win!';
    }
}

const showPlayerSelection = document.querySelector('.playerSelection');
const showPcSelection = document.querySelector('.pcSelection');
const showWinner = document.querySelector('.winner');
const roundCount = document.querySelector('.roundCount');
const userScore = document.querySelector('.userScore');
const pcScore = document.querySelector('.pcScore');


function updateGame() {
    const playerSelection = this.classList.toString(); 
    const computerSelection = computerPlay();

    showPlayerSelection.textContent = playerSelection;
    showPcSelection.textContent = computerSelection;

    let result = 0;
    result = playRound(playerSelection, computerSelection);
    showWinner.textContent = getTextResult(result);
    if (result === 1) {
        userScore.textContent = +userScore.textContent + 1;
        if (userScore.textContent == 5) {
            showWinner.style.cssText = 'font-weight:bold';  
            //disable event listeners on buttons
            gameBtns.forEach(btn => btn.removeEventListener('click', updateGame));
        }
    } else if (result === -1) {
        pcScore.textContent = +pcScore.textContent + 1;
        if (pcScore.textContent == 5)  {
            showWinner.style.cssText = 'font-weight:bold'; 
            gameBtns.forEach(btn => btn.removeEventListener('click', updateGame));
        }
    } 
    roundCount.textContent = +roundCount.textContent + 1;
}

const gameBtns = document.querySelectorAll('.gameButtons > button');

gameBtns.forEach(btn => btn.addEventListener('click', updateGame));
