//Generating a random numbers
function getComputerChoice() {
    let num = Math.random() * 100
    let numRounded = Math.floor(num)
    if (numRounded <= 33) {
        return 'rock'
    }
    else if(numRounded <= 66) {
        return 'paper'
    }
    else if(numRounded <= 100) {
        return 'scissors'
    }
}

// plays the game function
function playRound(playerSelection, compSelection) {
    playerSelection.toLowerCase()
    
    switch (playerSelection) {
        case 'rock' :

        if (compSelection === 'paper') {
        return "You lose! paper beats rock"
        }

        else if (compSelection === 'rock' ) {
            return "It's a draw! Try again."
        }

        else if (compSelection === 'scissors') {
            return "You win! Rock beats paper."
        }
        break; 

        case 'paper' : 

        if (compSelection === 'paper') {
        return "It's a draw! Try again"
        }
        else if (compSelection === 'rock' ) {
            return "You win! paper beats rock."
        }
        else if (compSelection === 'scissors') {
            return "You lose! scissors beats paper."
        }
        break;

        case 'scissors' :

        if (compSelection === 'paper') {
        return "You win! Scissors beats Paper"
        }
        else if (compSelection === 'rock' ) {
            return "You lose! Rock beats scissors."
        }
        else if (compSelection === 'scissors') {
            return "It's a draw! try again."
        }
    }
}

// 
// Finale score calc
// 


let playerScore = 0
let compScore = 0 


//const playerSelection = prompt('Choose rock, paper or scissors'); //rock repeats 5 times  
function scoreCalc (result) {
    result.toLowerCase()
    if ( result.match('win') === null ) {  
       return compScore++ 
     } else if (result.match('lose') == null) {           
        return playerScore++
     } else if (result.match('draw') !== null) {
       return console.log('draw')
     } 
}

//
//
//
//Dom Manipulation
//
//
//

let playerSelection = '' //player choice
let compSelection = getComputerChoice(); // choice of computer

const div = document.querySelector('#results') // links the div for results

// event listeners for rock paper scissors
const rock = document.querySelector('#rock');
//when rock is clicked, playerSelection is rock, and the compSelection is used, however comPSelection is not repeated. must refresh browser to repeat.
rock.addEventListener('click', () => {
    playerSelection = 'rock'
    compSelection = getComputerChoice();
    game(playerSelection, compSelection)
 
});

const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
    playerSelection = 'paper'
    compSelection = getComputerChoice();
    game(playerSelection, compSelection)
});

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
    playerSelection = 'scissors'
    compSelection = getComputerChoice();
    game(playerSelection, compSelection)
});

// 
// 
//Games Function 
// 
//


const player = document.querySelector('#player');
const comp = document.querySelector('#comp');
const gameScore = document.querySelector('#gameResult');

function game(playerSelection, compSelection) {
    let result = playRound(playerSelection, compSelection)
    
    // scoreCalc is undefined, becuase there are no outputs remember it is a function
    let score = scoreCalc(result)


    player.innerHTML = 'Player Score: ' + `${playerScore}`;
    comp.innerHTML = 'Computer Score: ' + `${compScore}`;
    
    if (compScore >= 5) {
        gameScore   .innerHTML = " loser";
     }
    else if(playerScore >= 5) {
        gameScore.innerHTML = " winner";
    };
    
    

    return console.log('round done')
};



