const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const box = 20;
let snake = [{ x: 200, y: 200 }];
let food = getRandomPosition();
let direction = "RIGHT";
let score = 0;
let game;

document.addEventListener("keydown", changeDirection);

function getRandomPosition() {
  return {
    x: Math.floor(Math.random() * (canvas.width / box)) * box,
    y: Math.floor(Math.random() * (canvas.height / box)) * box
  };
}

function changeDirection(e) {
  const key = e.key;
  if (key === "ArrowUp" && direction !== "DOWN") direction = "UP";
  if (key === "ArrowDown" && direction !== "UP") direction = "DOWN";
  if (key === "ArrowLeft" && direction !== "RIGHT") direction = "LEFT";
  if (key === "ArrowRight" && direction !== "LEFT") direction = "RIGHT";
}

function drawGame() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Snake
  snake.forEach((segment, i) => {
    ctx.fillStyle = i === 0 ? "#5a8f5c" : "#7ccf7e";
    ctx.fillRect(segment.x, segment.y, box, box);
  });

  // Food
  ctx.fillStyle = "#ff7070";
  ctx.fillRect(food.x, food.y, box, box);

  // Move Snake
  let head = { ...snake[0] };
  if (direction === "UP") head.y -= box;
  if (direction === "DOWN") head.y += box;
  if (direction === "LEFT") head.x -= box;
  if (direction === "RIGHT") head.x += box;

  // Game Over conditions
  if (
    head.x < 0 || head.y < 0 ||
    head.x >= canvas.width || head.y >= canvas.height ||
    snake.some(segment => segment.x === head.x && segment.y === head.y)
  ) {
    clearInterval(game);
    alert("Game Over!");
    return;
  }

  snake.unshift(head);

  if (head.x === food.x && head.y === food.y) {
    score++;
    document.getElementById("snake-score").textContent = `Score: ${score}`;
    food = getRandomPosition();
  } else {
    snake.pop();
  }
}

document.getElementById("restart").addEventListener("click", () => {
  snake = [{ x: 200, y: 200 }];
  direction = "RIGHT";
  food = getRandomPosition();
  score = 0;
  document.getElementById("snake-score").textContent = `Score: 0`;
  clearInterval(game);
  game = setInterval(drawGame, 150);
});

// Start Game
game = setInterval(drawGame, 150);


document.getElementById("back-to-games").addEventListener("click", function () {
  window.location.href = "../games.html";
});
