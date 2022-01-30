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
        return 0;
        // return "Tie! No one wins..";
    } else if (playerSelection === "Rock" && computerSelection === "Scissors" ||
        playerSelection === "Scissors" && computerSelection === "Paper" ||
        playerSelection === "Paper" && computerSelection === "Rock") {
        return 1;
        // return `You win! ${playerSelection} beats ${computerSelection}`;
    } else {
        return -1;
        // return `You lose! ${computerSelection} beats ${playerSelection}`;
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
        playerSelection = prompt("Choose: Rock, Paper, Scissors", "Rock");
        playerSelection = firstOnlyCapital(playerSelection);
    
        console.log("player selected", playerSelection);
        console.log("pc selected", computerSelection);
    
        result += playRound(playerSelection, computerSelection);
        console.log(result);
    }
  
    if (result === 0) return `Tie.`;
    return (result > 0) ? `You win!!!` : 'You lose.. Try again.';
}
alert(game());


