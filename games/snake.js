document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("gameCanvas");
    const ctx = canvas.getContext("2d");
    const scoreDisplay = document.getElementById("score");
    const restartButton = document.getElementById("restart");
    const backButton = document.getElementById("back-to-games");

    const gridSize = 20;
    let snake = [{ x: 200, y: 200 }];
    let food = { x: 100, y: 100 };
    let dx = 0; // Had se na začátku nehýbe
    let dy = 0;
    let score = 0;
    let gameRunning = true;

    function drawBackground() {
        ctx.fillStyle = "#c2f0c2"; // Světle zelená tráva
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    function drawSnake() {
        ctx.fillStyle = "green";
        snake.forEach(part => {
            ctx.fillRect(part.x, part.y, gridSize, gridSize);
            ctx.strokeStyle = "darkgreen";
            ctx.strokeRect(part.x, part.y, gridSize, gridSize);
        });
    }

    function drawFood() {
        ctx.fillStyle = "red";
        ctx.fillRect(food.x, food.y, gridSize, gridSize);
    }

    function moveSnake() {
        if (!gameRunning) return;

        const head = { x: snake[0].x + dx, y: snake[0].y + dy };

        // Pokud had stojí na místě (na začátku hry), nic se neděje
        if (dx === 0 && dy === 0) return;

        // Kontrola nárazu do zdi
        if (head.x < 0 || head.x >= canvas.width || head.y < 0 || head.y >= canvas.height) {
            endGame();
            return;
        }

        // Kontrola nárazu do sebe
        for (let i = 0; i < snake.length; i++) {
            if (head.x === snake[i].x && head.y === snake[i].y) {
                endGame();
                return;
            }
        }

        // Přidání nové hlavy
        snake.unshift(head);

        // Kontrola jestli had snědl jídlo
        if (head.x === food.x && head.y === food.y) {
            score += 10;
            scoreDisplay.textContent = `Score: ${score}`;
            placeFood();
        } else {
            snake.pop();
        }
    }

    function placeFood() {
        food.x = Math.floor(Math.random() * (canvas.width / gridSize)) * gridSize;
        food.y = Math.floor(Math.random() * (canvas.height / gridSize)) * gridSize;
    }

    function endGame() {
        gameRunning = false;
        alert(`Game Over! Your final score is ${score}`);
    }

    function gameLoop() {
        if (gameRunning) {
            drawBackground();
            drawFood();
            drawSnake();
            moveSnake();
        }
        setTimeout(gameLoop, 100);
    }

    document.addEventListener("keydown", (event) => {
        if (event.key === "ArrowUp" && dy === 0) {
            dx = 0;
            dy = -gridSize;
        } else if (event.key === "ArrowDown" && dy === 0) {
            dx = 0;
            dy = gridSize;
        } else if (event.key === "ArrowLeft" && dx === 0) {
            dx = -gridSize;
            dy = 0;
        } else if (event.key === "ArrowRight" && dx === 0) {
            dx = gridSize;
            dy = 0;
        }
    });

    restartButton.addEventListener("click", () => {
        snake = [{ x: 200, y: 200 }];
        dx = 0; // Restartujeme pohyb (had začne stát)
        dy = 0;
        score = 0;
        scoreDisplay.textContent = "Score: 0";
        gameRunning = true;
        placeFood();
    });

    backButton.addEventListener("click", () => {
        window.location.href = "../games.html";
    });

    placeFood();
    gameLoop();
});
