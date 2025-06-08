function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3);
    return choice;
}

function getHumanChoice(){
    let choice = parseInt();
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

const results = document.querySelector(".results");

const rock = document.querySelector('.rock');
rock.addEventListener('click', ()=> {
    const humanSelection = 2;
    const computerSelection = getComputerChoice();
    result = playRound(humanSelection, computerSelection);
    results.textContent = result + '\nScore: You: '+ humanScore + ' - Computer: ' + computerScore
    if(humanScore===5 || computerScore===5){
        results.textContent += '\nFinal score: You: ' + humanScore + ' - Computer: ' + computerScore;
            if(humanScore>computerScore){
                results.textContent ='Congratulations!';
            }else{
                results.textContent ="It's okay. Try one more time";
            }
    }
});
const paper = document.querySelector('.paper');
paper.addEventListener('click', ()=> {
    const humanSelection = 1;
    const computerSelection = getComputerChoice();
    result = playRound(humanSelection, computerSelection);
    results.textContent = result + '\nScore: You: '+ humanScore + ' - Computer: ' + computerScore
    if(humanScore===5 || computerScore===5){
        results.textContent += '\nFinal score: You: ' + humanScore + ' - Computer: ' + computerScore;
            if(humanScore>computerScore){
                results.textContent ='Congratulations!';
            }else{
                results.textContent ="It's okay. Try one more time";
            }
    }
});
const scissors = document.querySelector('.scissors');
scissors.addEventListener('click', ()=> {
    const humanSelection = 0;
    const computerSelection = getComputerChoice();
    result = playRound(humanSelection, computerSelection);
    results.textContent = result + '\nScore: You: '+ humanScore + ' - Computer: ' + computerScore
    if(humanScore===5 || computerScore===5){
        results.textContent += '\nFinal score: You: ' + humanScore + ' - Computer: ' + computerScore;
            if(humanScore>computerScore){
                results.textContent ='Congratulations!';
            }else{
                results.textContent ="It's okay. Try one more time";
            }
    }
});

