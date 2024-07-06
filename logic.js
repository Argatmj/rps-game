function getComputerChoice(){
    let num = Math.floor(Math.random() * 3);
    const choices = ['rock', 'paper', 'scissors'];
    return choices[num]; 
}

function getHumanChoice(){
    let humanChoice = prompt("Choice : rock, paper, sciccors.")
    return humanChoice;
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

function playGame(){
    let humanScore = 0;
    let ComputerScore = 0;
    for(let i = 0; i < 5 ; i++){
        const computer = getComputerChoice();
        const human = getHumanChoice();
        let result = playRound(human,computer);
        
        if(result.includes("win!")){
            humanScore++;
        }else if(result.includes("lose!")){
            ComputerScore++;
        }

        console.log(result);
        console.log(`Current Scores - Human: ${humanScore}, Computer: ${ComputerScore}`);
    }

    console.log(`Final Scores - Human: ${humanScore}, Computer: ${ComputerScore}`);
    if (humanScore > ComputerScore) {
        console.log('Human wins the game!');
    } else if (ComputerScore > humanScore) {
        console.log('Computer wins the game!');
    } else {
        console.log('The game is a tie!');
    }
}