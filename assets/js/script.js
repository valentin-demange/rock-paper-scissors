// Global variable
const NO_WINNER = 0;
const USER_VICTORY = 1;
const COMPUTER_VICTORY = 2;
const END_GAME_SCORE = 5;
const CHOICE = ["Pierre", "Papier", "Ciseaux"];
const displayScore = document.querySelector('#display-score');
const displayWinner = document.querySelector('#display-winner');
let userScore = 0 , computerScore = 0;

// Compute computer choice
function computerPlay() {
  randomNumber = Math.random();
  if (randomNumber < 1/3) {
    return 0
  } else if (randomNumber < 2/3) {
    return 1
  } else {
    return 2
  }
}

function playRound(userChoice) {  

  // Computer choice
  computerChoice = computerPlay();

  // Print the user choice
  console.log(`Le joueur choisi, ${CHOICE[userChoice]}`)

  // Print the computer choice
  console.log(`L'ordinateur choisi, ${CHOICE[computerChoice]}`)

  stringDisplayWinner = `L'ordinateur choisi, ${CHOICE[computerChoice]}`

  // Compute the winner
  diff = userChoice - computerChoice;
  if (diff == 0) {

      // Tie
      console.log("Egalité")
      stringDisplayWinner += ". Egalité";

    } else if (diff == 1 || diff == -2) {

      // Player wins
      userScore += 1;
      console.log("Le joueur gagne")
      stringDisplayWinner += ". Le joueur gagne";

    } else {

      // Computer wins
      computerScore += 1;
      console.log("L'ordinateur gagne")
      stringDisplayWinner += ". L'ordinateur gagne";

    }

    // Update displays
    displayWinner.textContent = stringDisplayWinner;
    displayScore.textContent = `Joueur ${userScore} - Ordinateur ${computerScore}`;


  }

  function playGame() {

    let userScore = 0 , computerScore = 0;

    while (userScore < END_GAME_SCORE && computerScore < END_GAME_SCORE) {

      resultRound = playRound();
      switch (resultRound) {
        case USER_VICTORY:
          userScore += 1;
        case COMPUTER_VICTORY:
          computerScore += 1;
        default:
      }

      console.log(`Utilisateur ${userScore} / ${computerScore} Ordinateur`);
    }
  }


// Action on rock button
const buttonRock = document.querySelector('#btn-rock');
buttonRock.addEventListener('click', () => {
  playRound(0);
});

// Action on paper button
const buttonPaper = document.querySelector('#btn-paper');
buttonPaper.addEventListener('click', () => {
  playRound(1);
});

// Action on scissors button
const buttonScissors = document.querySelector('#btn-scissors');
buttonScissors.addEventListener('click', () => {
  playRound(2);
});