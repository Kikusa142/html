// Výběr HTML prvků
const cells = document.querySelectorAll('.cell');
const restartButton = document.getElementById('restart');
const resultModal = document.getElementById('resultModal');
const resultMessage = document.getElementById('resultMessage');
const closeModalBtn = document.getElementById('closeModalBtn');

let currentPlayer = "X";
let board = ["", "", "", "", "", "", "", "", ""];
let gameActive = true;

const winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];

// Kliknutí na políčko
cells.forEach((cell, index) => {
    cell.addEventListener("click", () => {
        if (board[index] === "" && gameActive) {
            board[index] = currentPlayer;
            cell.textContent = currentPlayer;
            checkWinner();
            currentPlayer = currentPlayer === "X" ? "O" : "X";
        }
    });
});

function checkWinner() {
    for (let combo of winningCombos) {
        const [a, b, c] = combo;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            showResult(`${board[a]} wins! 🎉`);
            gameActive = false;
            return;
        }
    }

    if (!board.includes("")) {
        showResult("It's a draw! 🤝");
        gameActive = false;
    }
}

function showResult(message) {
    resultMessage.textContent = message;
    resultModal.style.display = "block";
}

// Zavření modalu
closeModalBtn.addEventListener("click", () => {
    resultModal.style.display = "none";
});

window.addEventListener("click", (e) => {
    if (e.target === resultModal) {
        resultModal.style.display = "none";
    }
});

restartButton.addEventListener("click", () => {
    board = ["", "", "", "", "", "", "", "", ""];
    gameActive = true;
    cells.forEach(cell => cell.textContent = "");
    resultModal.style.display = "none";
});

document.getElementById("back-to-games").addEventListener("click", function () {
    window.location.href = "../games.html";
});
