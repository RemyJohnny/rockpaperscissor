
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const userRecord = document.querySelector(".playersRecord");
const botRecord = document.querySelector(".computersRecord");
const scoreTitle = document.querySelector(".scoreHeader");
const title = document.querySelector('.option-header');
const rockimg = document.querySelector('.rockimg');
const paperimg = document.querySelector('.paperimg');
const scissorsimg = document.querySelector('.scissorsimg');
const divs = document.querySelectorAll('.div-img');
const optionsdiv = document.querySelector('.playersoptions');
//button to reload the page after a complete round
const btn = document.createElement('button');
//parent element to appendthe child elemet(btn)
const gamediv = document.querySelector('#gamesection');



let playersChoice;
let determinant;
let computersChoice;
let round;
let computersRecord = 0;
let playersRecord = 0 ;

rock.addEventListener("click",() => {
    rockimg.classList.add('clickedimg');
    title.textContent ='^';
    title.style.cssText ='color : rgb(236, 201, 112)'
    playersChoice = "rock";
    determinant= Math.ceil(Math.random()*12);
    computersChoice = getComputersChoice(determinant);
    round = playRound(playersChoice,computersChoice);
    scorer(round);
    endGame(playersRecord,computersRecord);
});
rockimg.addEventListener('transitionend', () => {
    rockimg.classList.remove('clickedimg')
})
paperimg.addEventListener('transitionend', () => {
    paperimg.classList.remove('clickedimg')
})
scissorsimg.addEventListener('transitionend', () => {
    scissorsimg.classList.remove('clickedimg')
})



paper.addEventListener("click",() => {
    paperimg.classList.add('clickedimg');
    title.textContent ='^ ^';
    title.style.cssText ='color : rgb(236, 201, 112)'
    playersChoice = "paper";
    determinant= Math.ceil(Math.random()*12);
    computersChoice = getComputersChoice(determinant);
    round = playRound(playersChoice,computersChoice);
    scorer(round);
    endGame(playersRecord,computersRecord);
});
scissors.addEventListener("click",() => {
    scissorsimg.classList.add('clickedimg');
    title.textContent ='^ ^ ^';
    title.style.cssText ='color : rgb(236, 201, 112)'
    playersChoice = "scissors";
    determinant= Math.ceil(Math.random()*12);
    computersChoice = getComputersChoice(determinant);
    round = playRound(playersChoice,computersChoice);
    scorer(round);
    endGame(playersRecord,computersRecord);
});
//
btn.addEventListener('click', () => {
    location.reload();
})

function endGame(pC,cC){
    if(pC === 7 && pC > cC){
        rockimg.classList.add('fade');
        scissorsimg.classList.add('fade');
        paperimg.classList.add('fade');
        optionsdiv.innerHTML = 'congratulations';
        optionsdiv.style.cssText= 'color :green; font-weight: 1000; text-align: center; font-size: 40px; letter-spacing: 2px;'
        gamediv.appendChild(btn);
        btn.textContent = 'play again';
    }
    else if (cC === 7 && cC > pC){
        rockimg.classList.add('fade');
        scissorsimg.classList.add('fade');
        paperimg.classList.add('fade');
        console.log('computer won');
        optionsdiv.innerHTML = 'you lose';
        optionsdiv.style.cssText= 'color :red; font-weight: 1000; text-align: center; font-size: 40px;'
        gamediv.appendChild(btn)
        btn.textContent = 'try again';
    }
}



function scorer (round){
    if (round === 'l'){
        computersRecord++;
        botRecord.textContent = computersRecord;
    }
    else if (round ==='w'){
        playersRecord++;
        userRecord.textContent = playersRecord;
    }
    else if (round === 'wl'){
        botRecord.textContent = computersRecord;
        userRecord.textContent = playersRecord;
    }
}

function getComputersChoice (determinant) {
    //funtion to determine the computers choice
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
        scoreTitle.textContent = 'You win... rock beats scissors ';
        scoreTitle.style.color = "green"
        return 'w';
    }
    else if  (playersChoice === 'rock' && computersChoice === 'paper'){
        scoreTitle.textContent = 'You lose... paper beats rock';
        scoreTitle.style.color = 'red'
        return 'l';
    }
    else if  (playersChoice === 'rock' && computersChoice === 'rock'){
        scoreTitle.textContent = "it's a tie";
        scoreTitle.style.cssText ='colour: rgb(236, 201, 112)';
        return 'wl';
    }
    else if  (playersChoice === 'paper' && computersChoice === 'paper'){
        scoreTitle.textContent = "it's a tie";
        scoreTitle.style.cssText ='colour: rgb(236, 201, 112)';
        return 'wl';

    }
    else if  (playersChoice === 'paper' && computersChoice === 'scissors'){
        scoreTitle.textContent = 'You lose... scissors beats paper';
        scoreTitle.style.color = 'red'
        return 'l';
    }
    else if  (playersChoice === 'paper' && computersChoice === 'rock'){
        scoreTitle.textContent = 'You win... paper beats rock';
        scoreTitle.style.color = "green";
        return 'w';
    }
    else if  (playersChoice === 'scissors' && computersChoice === 'paper'){
        scoreTitle.textContent = 'You win...  scissors beats paper';
        scoreTitle.style.color = "green";
        return 'w';
    }
    else if  (playersChoice === 'scissors' && computersChoice === 'rock'){
        scoreTitle.textContent = 'You lose... rock beats scissors';
        scoreTitle.style.color = 'red'
        return 'l';
    }
    else if (playersChoice === 'scissors' && computersChoice === 'scissors'){
        scoreTitle.textContent = 'it\'s a tie';
        scoreTitle.style.cssText ='colour: rgb(236, 201, 112)';
        return 'wl';
    }
    else {
        console.log('wrong input');
    }




}
