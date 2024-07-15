function getComputerChoice(){
    let num = Math.floor(Math.random() * 3);
    const choices = ['rock', 'paper', 'scissors'];
    return choices[num]; 
}

function playRound(HumanChoice,ComputerChoice){
    let humanChoice = HumanChoice.toLowerCase();
    
    let win = `You win! ${humanChoice} beats ${ComputerChoice}.`
    let lose = `You lose! ${ComputerChoice} beats ${humanChoice}.`
    let tie = `You tie! ${humanChoice} equals ${ComputerChoice}.`

    if (humanChoice === ComputerChoice) {
        return tie;
    } else if (
        (humanChoice === 'rock' && ComputerChoice === 'scissors') ||
        (humanChoice === 'paper' && ComputerChoice === 'rock') ||
        (humanChoice === 'scissors' && ComputerChoice === 'paper')
    ) {
        return win;
    } else {
        return lose;
    }
}

function updateInfo(result){
    const container = document.querySelector(".info")
    container.textContent = result;
}

function updateScore(result){
    const human = document.getElementById("human-score")
    const computer = document.getElementById("computer-score")

    let humanScore = parseInt(human.textContent);
    let ComputerScore = parseInt(computer.textContent);

    if(result.includes("win")){
        humanScore++;
    }else if(result.includes("lose")){
        ComputerScore++;
    }

    human.textContent = humanScore;
    computer.textContent = ComputerScore;

    if(humanScore === 5){
        return 'win';
    }else if (ComputerScore === 5){
        return 'lose';
    }
    
}

function reset(text){
    const human = document.getElementById("human-score")
    const computer = document.getElementById("computer-score")
    const container = document.querySelector(".info")
    
    container.innerHTML = text;
    human.textContent = 0;
    computer.textContent = 0;
}


function playGame(){
    const buttons = document.querySelectorAll(".choices button");
    let humanChoice;
    let ComputerChoice;
    buttons.forEach( button => {
        button.addEventListener("click", () => {
        humanChoice = button.className;
        ComputerChoice = getComputerChoice();
        let result = playRound(humanChoice,ComputerChoice);
        updateInfo(result);
        let final = updateScore(result);
        if(final.includes("win")){
            reset("Yay! You won the game!");
        }else if(final.includes("lose")){
            reset("Ohh nooo! You lost the game!");
        }
        });
    });
}

playGame();