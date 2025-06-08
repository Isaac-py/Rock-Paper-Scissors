function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === 0 && computerChoice === 1) {
        humanScore += 1;
        return 'You win! Scissors beat Paper';
    } else if (humanChoice === 2 && computerChoice === 0) {
        humanScore += 1;
        return 'You win! Rock beats Scissors';
    } else if (humanChoice === 1 && computerChoice === 2) {
        humanScore += 1;
        return 'You win! Paper beats Rock';
    } else if (humanChoice === 0 && computerChoice === 2) {
        computerScore += 1;
        return 'You lose! Rock beats Scissors';
    } else if (humanChoice === 1 && computerChoice === 0) {
        computerScore += 1;
        return 'You lose! Scissors beat Paper';
    } else if (humanChoice === 2 && computerChoice === 1) {
        computerScore += 1;
        return 'You lose! Paper beats Rock';
    } else {
        return 'Draw!';
    }
}

const results = document.querySelector(".results");

function updateResults(resultText) {
    let resultHTML = resultText + '<br>Score: You: ' + humanScore + ' - Computer: ' + computerScore;

    if (humanScore === 5 || computerScore === 5) {
        resultHTML += '<br>Final score: You: ' + humanScore + ' - Computer: ' + computerScore;
        if (humanScore > computerScore) {
            resultHTML += '<br><strong>Congratulations!</strong>';
        } else {
            resultHTML += "<br><strong>It's okay. Try one more time</strong>";
        }

        document.querySelector('.rock').disabled = true;
        document.querySelector('.paper').disabled = true;
        document.querySelector('.scissors').disabled = true;
    }

    results.innerHTML = resultHTML;
}

document.querySelector('.rock').addEventListener('click', () => {
    const result = playRound(2, getComputerChoice());
    updateResults(result);
});

document.querySelector('.paper').addEventListener('click', () => {
    const result = playRound(1, getComputerChoice());
    updateResults(result);
});

document.querySelector('.scissors').addEventListener('click', () => {
    const result = playRound(0, getComputerChoice());
    updateResults(result);
});
