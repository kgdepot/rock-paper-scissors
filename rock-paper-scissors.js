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
        return "Tie! No one wins..";
    } else if (playerSelection === "Rock" && computerSelection === "Scissors" ||
        playerSelection === "Scissors" && computerSelection === "Paper" ||
        playerSelection === "Paper" && computerSelection === "Rock") {
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } else {
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
}
function firstOnlyCapital(inputString) {
    const inputLowercase = inputString.toLowerCase();
    const inputFirstPart = inputLowercase.slice(0, 1).toUpperCase();
    const inputSecondPart = inputLowercase.slice(1);
    return inputFirstPart + inputSecondPart;
}
function game() {
    let playerWinsCount = 0;
    let computerWinsCount = 0;
    let result = "";
    //-----------game 1 --------------
    let playerSelection = "PaPeR";
    playerSelection = firstOnlyCapital(playerSelection);
    let computerSelection = computerPlay();

    console.log("player selected", playerSelection);
    console.log("pc selected", computerSelection);

    result = playRound(playerSelection, computerSelection);
    console.log(result);
    //---------------------------------
    // result = playRound(playerSelection, computerSelection);
    // console.log(result);
    // result = playRound(playerSelection, computerSelection);
    // console.log(result);
    // result = playRound(playerSelection, computerSelection);
    // console.log(result);
    // result = playRound(playerSelection, computerSelection);



    return (playerWinsCount > computerWinsCount) ? `You win!!!` : 'You lose.. Try again.';

    // console.log(playRound(playerSelection, computerSelection));
    // console.log(playRound(playerSelection, computerSelection));
    // console.log(playRound(playerSelection, computerSelection));
    // console.log(playRound(playerSelection, computerSelection));
}
console.log(game());


