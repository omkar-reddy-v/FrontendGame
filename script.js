const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const resultDiv = document.getElementById("result");

function getRandomChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playGame(userChoice) {
    const computerChoice = getRandomChoice();
    let result;

    if (userChoice === computerChoice) {
        result = "It's a tie! Start new game";
        resultDiv.style.color = "blue"; // Set tie color
    } else if (
        (userChoice === "Rock" && computerChoice === "Scissors") || 
        // The symbol && is used to represents the logical AND 
        // The symbol || is used to represents the logical OR 
        (userChoice === "Paper" && computerChoice === "Rock") ||
        (userChoice === "Scissors" && computerChoice === "Paper")
    ) {
        result = `You win! ${userChoice} beats ${computerChoice} Start new game.`;
        resultDiv.style.color = "green"; // Set win color
    } else {
        result = `You lose! ${computerChoice} beats ${userChoice} Try again.`;
        resultDiv.style.color = "red"; // Set lose color
    }

    resultDiv.textContent = result;
    resultDiv.style.display = "block"; // Show result

}

const buttons = document.querySelectorAll('button');
const texts = document.querySelectorAll('span');

buttons.forEach((button, index) => {
  button.addEventListener('mouseover', () => {
    texts[index].style.display = 'inline';
  });
  
  button.addEventListener('mouseout', () => {
    texts[index].style.display = 'none';
  });
});



rockButton.addEventListener("click", () => playGame("Rock"));
paperButton.addEventListener("click", () => playGame("Paper"));
scissorsButton.addEventListener("click", () => playGame("Scissors"));
