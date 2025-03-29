document.addEventListener("DOMContentLoaded", function () {
    const choices = ["rock", "paper", "scissors"];
    const playerChoiceDisplay = document.getElementById("player-choice");
    const computerChoiceDisplay = document.getElementById("computer-choice");
    const resultDisplay = document.getElementById("result");

    const buttons = document.querySelectorAll(".rps-choice");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const playerChoice = button.getAttribute("data-choice");
            const computerChoice = choices[Math.floor(Math.random() * choices.length)];
            
            playerChoiceDisplay.textContent = `Your choice: ${playerChoice}`;
            computerChoiceDisplay.textContent = `Computer's choice: ${computerChoice}`;

            determineWinner(playerChoice, computerChoice);
        });
    });

    function determineWinner(player, computer) {
        resultDisplay.classList.remove("win", "lose", "draw"); // Nejprve odstraníme staré třídy
        resultDisplay.style.opacity = "0"; // Skryjeme výsledek na chvíli
    
        setTimeout(() => {
            if (player === computer) {
                resultDisplay.textContent = "It's a draw! 🤝";
                resultDisplay.classList.add("draw");
            } else if (
                (player === "rock" && computer === "scissors") ||
                (player === "paper" && computer === "rock") ||
                (player === "scissors" && computer === "paper")
            ) {
                resultDisplay.textContent = "You win! 🎉";
                resultDisplay.classList.add("win");
            } else {
                resultDisplay.textContent = "Computer wins! 😢";
                resultDisplay.classList.add("lose");
            }
    
            resultDisplay.style.opacity = "1"; // Znovu zobrazíme výsledek
        }, 300); // Po 300ms se výsledek objeví s animací
    }
    

    // Restart Game
    document.getElementById("restart").addEventListener("click", () => {
        playerChoiceDisplay.textContent = "Your choice: ";
        computerChoiceDisplay.textContent = "Computer's choice: ";
        resultDisplay.textContent = "";
    });

    // Back to Games button
    document.getElementById("back-to-games").addEventListener("click", () => {
        window.location.href = "../games.html";
    });
});
