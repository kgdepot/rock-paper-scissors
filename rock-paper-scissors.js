function computerPlay () {
    const randomNum3 = Math.floor(Math.random()*3);
    
    // console.log(randomNum3);
    // console.log(typeof randomNum3);

    if (randomNum3 === 0) {
        return "Rock";
    } else if (randomNum3 === 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
}
// console.log(computerPlay()); 

//e.g. playerSelection = 'Rock' 
//     computerSelection = 'Scissors' 


function playRound (playerSelection, computerSelection) {
    if (playerSelection === computerSelection) return "Tie";
    // else if ( playerSelection === "Rock" && computerSelection === "Scissors" ||
    // playerSelection === "Scissors" && computerSelection === "Paper"  || 
    // playerSelection === "Paper" && computerSelection === "Rock") {
    //     return `You win! ${playerSelection} beats ${computerSelection}`;
    }

const playerSelection = "Rock";
const computerSelection = "Rock";
console.log(playRound(playerSelection, computerSelection));
