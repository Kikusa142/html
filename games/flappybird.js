// const canvas = document.getElementById("gameCanvas");
// const ctx = canvas.getContext("2d");

// const playBtn = document.getElementById("playBtn");
// const restartBtn = document.getElementById("restartBtn");
// const gameOverText = document.getElementById("gameOver");
// const scoreDisplay = document.getElementById("scoreDisplay");

// let bird, pipes, gameRunning, pipeTimer, score;

// function resetGame() {
//   bird = { x: 80, y: 200, width: 30, height: 30, gravity: 1.2, velocity: 0 };
//   pipes = [];
//   gameRunning = true;
//   score = 0;

//   gameOverText.style.display = "none";
//   restartBtn.style.display = "none";
//   playBtn.style.display = "none";
//   scoreDisplay.textContent = "Score: 0";

//   clearInterval(pipeTimer);
//   generatePipe();
//   pipeTimer = setInterval(generatePipe, 2000); // Každé 2 sekundy

//   gameLoop();
// }

// function drawBird() {
//   ctx.fillStyle = "#ffcc00";
//   ctx.fillRect(bird.x, bird.y, bird.width, bird.height);
// }

// function drawPipes() {
//   ctx.fillStyle = "#5a8f5c";
//   pipes.forEach(pipe => {
//     ctx.fillRect(pipe.x, 0, pipe.width, pipe.top);
//     ctx.fillRect(pipe.x, pipe.bottom, pipe.width, canvas.height - pipe.bottom);
//   });
// }

// function generatePipe() {
//   const gap = 180;
//   const top = Math.floor(Math.random() * 180) + 80;
//   pipes.push({
//     x: canvas.width,
//     width: 60,
//     top: top,
//     bottom: top + gap,
//     passed: false // Nová vlastnost
//   });
// }

// function update() {
//   if (!gameRunning) return;

//   document.addEventListener("keydown", e => {
//     if (gameRunning && (e.code === "Space" || e.key === "ArrowUp")) {
//       bird.velocity = -14; // Silnější skok 💨
//     }
//   });
  

//   pipes.forEach(pipe => {
//     pipe.x -= 2;

//     // Přidání skóre při průchodu
//     if (!pipe.passed && pipe.x + pipe.width < bird.x) {
//       pipe.passed = true;
//       score++;
//       scoreDisplay.textContent = `Score: ${score}`;
//     }
//   });

//   pipes = pipes.filter(pipe => pipe.x + pipe.width > 0);

//   pipes.forEach(pipe => {
//     if (
//       bird.x < pipe.x + pipe.width &&
//       bird.x + bird.width > pipe.x &&
//       (bird.y < pipe.top || bird.y + bird.height > pipe.bottom)
//     ) {
//       endGame();
//     }
//   });

//   if (bird.y + bird.height > canvas.height || bird.y < 0) {
//     endGame();
//   }
// }

// function draw() {
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   drawBird();
//   drawPipes();
// }

// function gameLoop() {
//   update();
//   draw();
//   if (gameRunning) requestAnimationFrame(gameLoop);
// }

// function endGame() {
//   gameRunning = false;
//   gameOverText.style.display = "block";
//   restartBtn.style.display = "inline-block";
//   clearInterval(pipeTimer);
// }

// document.addEventListener("keydown", e => {
//   if (gameRunning && (e.code === "Space" || e.key === "ArrowUp")) {
//     bird.velocity = -10;
//   }
// });

// playBtn.addEventListener("click", resetGame);
// restartBtn.addEventListener("click", resetGame);






const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const playBtn = document.getElementById("playBtn");
const restartBtn = document.getElementById("restartBtn");
const gameOverText = document.getElementById("gameOver");
const scoreDisplay = document.getElementById("scoreDisplay");

let bird, pipes, gameRunning, pipeTimer, score;

function resetGame() {
  bird = { x: 80, y: 200, width: 30, height: 30, gravity: 0.8, velocity: 0 }; // Lehčí padání
  pipes = [];
  gameRunning = true;
  score = 0;

  gameOverText.style.display = "none";
  restartBtn.style.display = "none";
  playBtn.style.display = "none";
  scoreDisplay.textContent = "Score: 0";

  clearInterval(pipeTimer);
  generatePipe();
  pipeTimer = setInterval(generatePipe, 2000);

  gameLoop();
}

function drawBird() {
  ctx.fillStyle = "#ffcc00";
  ctx.fillRect(bird.x, bird.y, bird.width, bird.height);
}

function drawPipes() {
  ctx.fillStyle = "#5a8f5c";
  pipes.forEach(pipe => {
    ctx.fillRect(pipe.x, 0, pipe.width, pipe.top);
    ctx.fillRect(pipe.x, pipe.bottom, pipe.width, canvas.height - pipe.bottom);
  });
}

function generatePipe() {
  const gap = 180;
  const top = Math.floor(Math.random() * 180) + 80;
  pipes.push({
    x: canvas.width,
    width: 60,
    top: top,
    bottom: top + gap,
    passed: false
  });
}

function update() {
  if (!gameRunning) return;

  bird.velocity += bird.gravity;
  bird.y += bird.velocity;

  pipes.forEach(pipe => {
    pipe.x -= 2;

    if (!pipe.passed && pipe.x + pipe.width < bird.x) {
      pipe.passed = true;
      score++;
      scoreDisplay.textContent = `Score: ${score}`;
    }
  });

  pipes = pipes.filter(pipe => pipe.x + pipe.width > 0);

  pipes.forEach(pipe => {
    if (
      bird.x < pipe.x + pipe.width &&
      bird.x + bird.width > pipe.x &&
      (bird.y < pipe.top || bird.y + bird.height > pipe.bottom)
    ) {
      endGame();
    }
  });

  if (bird.y + bird.height > canvas.height || bird.y < 0) {
    endGame();
  }
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBird();
  drawPipes();
}

function gameLoop() {
  update();
  draw();
  if (gameRunning) requestAnimationFrame(gameLoop);
}

function endGame() {
  gameRunning = false;
  gameOverText.style.display = "block";
  restartBtn.style.display = "inline-block";
  clearInterval(pipeTimer);
}

// Ovládání
document.addEventListener("keydown", e => {
  if (gameRunning && (e.code === "Space" || e.key === "ArrowUp")) {
    bird.velocity = -10;
  }
});

playBtn.addEventListener("click", resetGame);
restartBtn.addEventListener("click", resetGame);
