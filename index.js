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
