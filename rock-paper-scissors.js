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
    return (result > 0) ? `You win!!!` : 'You lose.. Try again.';
}


const btns = document.querySelectorAll('button');
btns.forEach((btn) => {
    btn.addEventListener('click', () => {
        let result = 0;
        let playerSelection = btn.classList.toString(); 
        playerSelection = firstOnlyCapital(playerSelection);
        computerSelection = computerPlay();
    

        // let h1 = document.createElement("h1");
        // //setting this css style solving problem with new line in textContent
        // h1.setAttribute('style', 'white-space: pre;');
        // //add \r\n in text everywhere You want for line-break (new line)
        // h1.textContent = "This is a very long string and I would like to insert a carriage return \r\n...";
        // h1.textContent += "moreover, I would like to insert another carriage return \r\n...";
        // h1.textContent += "so this text will display in a new line";
        
        // document.body.appendChild(h1);


        const displayChoices = document.querySelector('.displayChoices');
        displayChoices.setAttribute('style', 'white-space: pre;')
        displayChoices.textContent = "Player selected: " + playerSelection + "\r\n"
                                + "Pc selected: " + computerSelection




        // console.log("player selected", playerSelection);
        // console.log("pc selected", computerSelection);

        result += playRound(playerSelection, computerSelection);
        
        const score = document.querySelector('.score');
        // console.log(score);
        score.textContent = +score.textContent + result;

        console.log(result);



        console.log(getResult(result));

    })});

// alert(game());


