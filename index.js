
//let determinant= Math.floor(Math.random()*100);

function getComputersChoice (determinant) {
    if (determinant <= 4 ){
        return 'scissors' ;
    }
    else if (determinant > 4 && determinant <= 8){
        return 'paper';
    }
    else if  (determinant > 8 && determinant <=12)  {   
        return 'rock' ;
    }
}

function playRound (playersChoice,computersChoice){
    if (playersChoice === 'rock' && computersChoice === 'scissors'){
        console.log('You win... rock beats scissors ')
        return 'w';
    }
    else if  (playersChoice === 'rock' && computersChoice === 'paper'){
        console.log('You lose... paper beats rock');
        return 'l';
    }
    else if  (playersChoice === 'rock' && computersChoice === 'rock'){
        console.log("it,s a tie");
        return 'wl';
    }
    else if  (playersChoice === 'paper' && computersChoice === 'paper'){
        console.log("it,s a tie");
        return 'wl';

    }
    else if  (playersChoice === 'paper' && computersChoice === 'scissors'){
        console.log('You lose... scissors beats paper');
        return 'l';
    }
    else if  (playersChoice === 'paper' && computersChoice === 'rock'){
        console.log('You win... paper beats rock');
        return 'w';
    }
    else if  (playersChoice === 'scissors' && computersChoice === 'paper'){
        console.log('You win...  scissors beats paper');
        return 'w';
    }
    else if  (playersChoice === 'scissors' && computersChoice === 'rock'){
        console.log('You lose... rock beats scissors');
        return 'l';
    }
    else if (playersChoice === 'scissors' && computersChoice === 'scissors'){
        console.log('it\'s a tie');
        return 'wl';
    }
    else {
        console.log('wrong input');
    }




}
let computersRecord = 0;
let playersRecord = 0 ;


function game() {

    for(i = 0; i < 5; i++){
        const playersinput = prompt ( 'rock , paper or scissors?');
        let playersChoice = playersinput.toLowerCase();
        let determinant= Math.floor(Math.random()*12);
        let computersChoice = getComputersChoice(determinant);
        let round = playRound(playersChoice,computersChoice);
        
        if (round === 'l'){
            computersRecord++;
        }
        else if (round ==='w'){
            playersRecord++;
        }
        else if (round === 'wl'){
            computersRecord++;
            playersRecord++;
        }
        /*console.log(determinant);
        console.log('players choice = '+ playersChoice);
        console.log('computers choice = ' + computersChoice);*/
        console.log('computers record  = ' + computersRecord);
        console.log('players record = ' + playersRecord);
        
    }
}

game();
console.log('.....');
console.log('computers record  = ' + computersRecord);
console.log('players record = ' + playersRecord)
if ( playersRecord > computersRecord){
    console.log('YOU WON');
}
else if (playersRecord < computersRecord){
    console.log('YOU LOSE');
}
else {
    console.log("it's a tie");
}
