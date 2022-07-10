// Global variable
const NO_WINNER = 0;
const USER_VICTORY = 1;
const COMPUTER_VICTORY = 2;
const END_GAME_SCORE = 5;
const CHOICE = ["Pierre", "Papier", "Ciseaux"];

playGame()

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

function playRound() {  

  let a = 1;
  let b = 2;

    // User Choice
    userChoice = parseInt(prompt("Jeune éphèbe, quel est ton choix ? 0-Pierre / 1-Papier / 2-Ciseaux"));

    // Computer choice
    computerChoice = computerPlay();

    // Print the user 
    console.log(`Le joueur a choisi, ${CHOICE[userChoice]}`)

    // Print the computer choice
    console.log(`Le joueur a choisi, ${CHOICE[computerChoice]}`)

    // Définir le grand gagnant
    diff = userChoice - computerChoice;
    if (diff == 0) {
        console.log("Egalité !")
        return NO_WINNER
      } else if (diff == 1 || diff == -2) {
        console.log("Le joueur gagne !")
        return USER_VICTORY
      } else {
        console.log("L'ordinateur gagne !")
        return COMPUTER_VICTORY
      }

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

