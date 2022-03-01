const CHOICES = ['rock', 'paper', 'scissors'];

function userSelection(userChoice){
  if (CHOICES.includes(userChoice.toLowerCase())) return userChoice.toLowerCase();
	else console.log('Wrong choice');
}


 function computerPlay(){
	 return CHOICES[Math.floor(Math.random() * CHOICES.length)];
 }

 function playRound(playerSelection, computerSelection){
	 if (playerSelection == 'rock' && computerSelection == 'paper'){
		 console.log('You Lose! Paper beats Rock');	 
		}
		else if (playerSelection == 'paper' && computerSelection == 'scissors'){
			console.log('You Lose! Scissors cuts Paper');
		}
		else if (playerSelection == 'scissors' && computerSelection == 'rock'){
			console.log('You Lose! Rock crushes Scissors');
		}
		else console.log('You Win!');
 }

function game(){
	for (let i = 0; i < 5; i++){
		const userChoice = userSelection(prompt('Enter a choice: '));
		const computerChoice = computerPlay();
		playRound(userChoice, computerChoice);
	}
}


game();

