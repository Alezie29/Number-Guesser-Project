let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => {
  return (Math.floor(Math.random () * 9))
}

const compareGuesses = (humanNum, computerNum, targetNum) => {

  let humanGuess = Math.abs(targetNumber - humanNum);
  let computerGuess = Math.abs(targetNumber - computerNum);

if (humanGuess > 9 || humanGuess < 0)
  alert ('Please enter a number between 0 and 10');
else if (humanGuess <= computerGuess) 
  return true;
else
  return false;
}

const updateScore = (winner) => {
  if (winner==='human')
    humanScore++;
  else if (winner==='computer')
    computerScore++;
}

const advanceRound = () => {
  currentRoundNumber++;
};

