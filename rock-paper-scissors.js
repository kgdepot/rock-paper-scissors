function computerPlay() {
    const randomNum3 = Math.floor(Math.random() * 3);
    if (randomNum3 === 0) {
        return "Rock";
    } else if (randomNum3 === 1) {
        return "Paper";
    } else {
        return "Scissors";
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
    const inputLowercase = inputString.toLowerCase();
    const inputFirstPart = inputLowercase.slice(0, 1).toUpperCase();
    const inputSecondPart = inputLowercase.slice(1);
    return inputFirstPart + inputSecondPart;
}
function game() {
    let result = 0;
    let computerSelection
    let playerSelection

    for (i=1; i<=5; i++) {
        computerSelection = computerPlay();
        let playerSelection = btn.classList.toString(); 
        playerSelection = firstOnlyCapital(playerSelection);
    
        console.log("player selected", playerSelection);
        console.log("pc selected", computerSelection);
    
        result += playRound(playerSelection, computerSelection);
        console.log(result);
    }
  
    if (result === 0) return `Tie.`;
    return (result > 0) ? `You win!!!` : 'You lose.. Try again.';
}
function getResult(result) {
    if (result === 0) return `Tie.`;
    return (result > 0) ? `You win!` : 'You lose..';
}
function showSelectionAndScore() {
    let playerSelection = this.classList.toString(); 
    playerSelection = firstOnlyCapital(playerSelection);
    computerSelection = computerPlay();

    const showPlayerSelection = document.querySelector('.playerSelection');
    const showPcSelection = document.querySelector('.pcSelection');
    showPlayerSelection.textContent = playerSelection;
    showPcSelection.textContent = computerSelection;

    let result = 0;
    result = playRound(playerSelection, computerSelection);
    const showWinner = document.querySelector('.winner');
    showWinner.textContent = getResult(result);
    if (result === 1) {
        const userScore = document.querySelector('.userScore');
        userScore.textContent = +userScore.textContent + 1;
        if (userScore.textContent == 5) {
            showWinner.style.cssText = 'color: blue; background: white';  
            //disable event listeners
            
        }

    } else if (result === -1) {
        const pcScore = document.querySelector('.pcScore');
        pcScore.textContent = +pcScore.textContent + 1;
        if (pcScore.textContent == 5) 
        showWinner.style.cssText = 'color: blue; background: white'; 
    } 
 
    let roundCount = document.querySelector('.roundCount');
    console.log(roundCount.textContent == 5);
    console.log(typeof roundCount)

    roundCount.textContent = +roundCount.textContent + 1;
}

const btns = document.querySelectorAll('button');

btns.forEach(btn => btn.addEventListener('click', showSelectionAndScore));
// alert(game());


