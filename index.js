function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3);
    if(choice == 0){
        return 'scissors';
    }else if(choice==1){
        return 'paper';
    }else{
        return 'rock';
    }
}

function getHumanChoice(){
    let choice = parseInt(prompt("Please enter the number corresponding to your choice: scissors - 0; paper - 1; rock - 2 : "));
    if(choice == 0){
        return 'scissors';
    }else if(choice==1){
        return 'paper';
    }else{
        return 'rock';
    }
}
console.log(getHumanChoice());