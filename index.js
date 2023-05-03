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

// plays the game

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


function games() {
  let playerScore = 0
  let compScore = 0 
  
//loops 
for (let i = 0; i < 5; i++) { 
  
  const playerSelection = prompt('Choose rock, paper or scissors'); //rock repeats 5 times
  
  const compSelection = getComputerChoice(); // choice 
  
  const result = playRound(playerSelection, compSelection)
    console.log(result)
    
  if ( result.match('win') === null ) {  
           compScore++ 
        } else if (result.match('lose') == null) {           
           playerScore++
        } else if (result.match('draw') !== null) {
          console.log('draw')
        } 
}

   if (playerScore > compScore) {
    return console.log('you win, you were lucky this time.')
  } else if (compScore > playerScore) {
    return console.log ('you lose mate try better next time')
  }

}
