// Výběr HTML prvků
const cells = document.querySelectorAll('.cell');
const resultDisplay = document.getElementById('result');
const restartButton = document.getElementById('restart');

let currentPlayer = "X"; // Hráč X začíná
let board = ["", "", "", "", "", "", "", "", ""]; // Prázdné pole
let gameActive = true;

// Možné výherní kombinace
const winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Řádky
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Sloupce
    [0, 4, 8], [2, 4, 6]             // Diagonály
];

// Kliknutí na políčko
cells.forEach((cell, index) => {
    cell.addEventListener("click", () => {
        if (board[index] === "" && gameActive) {
            board[index] = currentPlayer;
            cell.textContent = currentPlayer;
            checkWinner();
            currentPlayer = currentPlayer === "X" ? "O" : "X"; // Přepnutí hráče
        }
    });
});

// Kontrola vítěze
function checkWinner() {
    for (let combo of winningCombos) {
        let [a, b, c] = combo;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            resultDisplay.textContent = `${board[a]} wins! 🎉`;
            gameActive = false;
            return;
        }
    }

    // Remíza
    if (!board.includes("")) {
        resultDisplay.textContent = "It's a draw! 🤝";
        gameActive = false;
    }
}

// Restart hry
restartButton.addEventListener("click", () => {
    board = ["", "", "", "", "", "", "", "", ""];
    gameActive = true;
    resultDisplay.textContent = "";
    cells.forEach(cell => cell.textContent = "");
});




// Tlačítko pro návrat na stránku her
document.getElementById("back-to-games").addEventListener("click", function () {
    window.location.href = "../games.html"; // Přesměrování na games.html
});

