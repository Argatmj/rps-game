function getComputerChoice(){
    let num = Math.floor(Math.random() * 3);
    switch(num){
        case 0:
            return "rock"
        case 1:
            return "paper"
        case 2:
            return "scissors"
        default:
            return "Invalid"
    }
}

function getHumanChoice(){
    let humanChoice = prompt("Choice : rock, paper, sciccors")
    return humanChoice;
}