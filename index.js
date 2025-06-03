function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3);
    return choice;
}

function getHumanChoice(){
    let choice = parseInt(prompt("Please enter the number corresponding to your choice: scissors - 0; paper - 1; rock - 2 : "));
    return choice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    if(humanChoice==0 && computerChoice==1){
        humanScore+=1; 
        return 'You win! Scissors beat Paper';
    }else if(humanChoice==2 && computerChoice==0){
        humanScore+=1;
        return 'You win! Rock beats Scissors';
    }else if(humanChoice==1 && computerChoice==2){
        humanScore+=1;
        return 'You win! Paper beats Rock';
    }else if(humanChoice==0 && computerChoice==2){
        computerScore+=1;
        return 'You lose! Rock beats Scissors';
    }else if(humanChoice==1 && computerChoice==0){
        computerScore+=1;
        return 'You lose! Scissors beat Paper';
    }else if(humanChoice==2 && computerChoice==1){
        computerScore+=1;
        return 'You lose! Paper beats Rock';
    }else{
        return 'Draw!'
    }
}
function playGame(){
    for(let i=1; i<6; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        console.log('Round '+i);
        console.log(playRound(humanSelection, computerSelection));
        console.log('Score: You: '+ humanScore + ' - Computer: ' + computerScore);
    }
    console.log('Final score: You: '+ humanScore + ' - Computer: ' + computerScore);
    if(humanScore>computerScore){
        console.log('Congratulations!');
    }else{
        console.log("It's okay. Try one more time");
    }
}
playGame();
