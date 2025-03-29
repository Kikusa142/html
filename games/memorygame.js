document.addEventListener("DOMContentLoaded", () => {
    const memoryGame = document.querySelector(".memory-game");
    const gameMessage = document.getElementById("game-message");
    const restartButton = document.getElementById("restart");
    const backButton = document.getElementById("back-to-games");

    const emojis = ["🍎", "🍌", "🍒", "🍇", "🍉", "🍋", "🥝", "🍓"];
    let cardValues = [...emojis, ...emojis]; // Dvojice karet
    let flippedCards = [];
    let matchedPairs = 0;

    // Zamíchání karet
    cardValues.sort(() => Math.random() - 0.5);

    // Vytvoření karet
    cardValues.forEach(value => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.dataset.value = value;
        card.innerHTML = "?"; // Skryté
        card.addEventListener("click", flipCard);
        memoryGame.appendChild(card);
    });

    function flipCard() {
        if (flippedCards.length < 2 && !this.classList.contains("flipped")) {
            this.classList.add("flipped");
            this.innerHTML = this.dataset.value;
            flippedCards.push(this);

            if (flippedCards.length === 2) {
                setTimeout(checkMatch, 500);
            }
        }
    }

    function checkMatch() {
        if (flippedCards[0].dataset.value === flippedCards[1].dataset.value) {
            flippedCards = [];
            matchedPairs++;
            if (matchedPairs === emojis.length) {
                gameMessage.textContent = "🎉 You found all pairs! 🎉";
            }
        } else {
            flippedCards.forEach(card => {
                card.classList.remove("flipped");
                card.innerHTML = "?";
            });
            flippedCards = [];
        }
    }

    restartButton.addEventListener("click", () => {
        memoryGame.innerHTML = "";
        gameMessage.textContent = "";
        matchedPairs = 0;
        flippedCards = [];
        cardValues.sort(() => Math.random() - 0.5);
        cardValues.forEach(value => {
            const card = document.createElement("div");
            card.classList.add("card");
            card.dataset.value = value;
            card.innerHTML = "?";
            card.addEventListener("click", flipCard);
            memoryGame.appendChild(card);
        });
    });

    backButton.addEventListener("click", () => {
        window.location.href = "../games.html";
    });
});


