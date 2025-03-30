// let cookies = 0;
// let cookiesPerClick = 1;
// let upgradeCost = 10;
// let level = 1;

// const cookie = document.getElementById("cookie");
// const score = document.getElementById("score");
// const levelDisplay = document.getElementById("level");
// const upgradeBtn = document.getElementById("upgrade-btn");
// const customiseBtn = document.getElementById("customise-btn");
// const customiseShop = document.getElementById("customise-shop");
// const floatingContainer = document.getElementById("floating-points");

// cookie.addEventListener("click", (e) => {
//   cookies += cookiesPerClick;
//   updateScore();

//   const floating = document.createElement("div");
//   floating.classList.add("floating-text");
//   floating.textContent = `+${cookiesPerClick}`;
//   floating.style.left = e.clientX + "px";
//   floating.style.top = e.clientY + "px";
//   floatingContainer.appendChild(floating);

//   setTimeout(() => {
//     floating.remove();
//   }, 1000);
// });

// upgradeBtn.addEventListener("click", () => {
//   if (cookies >= upgradeCost) {
//     cookies -= upgradeCost;
//     cookiesPerClick += 1;
//     upgradeCost = Math.floor(upgradeCost * 1.7);
//     level++;
//     upgradeBtn.textContent = `Upgrade (${upgradeCost} 🍪)`;
//     updateScore();
//     levelDisplay.textContent = `Level: ${level}`;
//   }
// });

// customiseBtn.addEventListener("click", () => {
//   customiseShop.classList.toggle("hidden");
// });

// function updateScore() {
//   score.textContent = `Cookies: ${cookies}`;
// }




let cookies = 0;
let cookiesPerClick = 1;
let upgradeCost = 10;
let level = 1;

const cookie = document.getElementById("cookie");
const score = document.getElementById("score");
const levelDisplay = document.getElementById("level");
const upgradeBtn = document.getElementById("upgrade-btn");
const customiseBtn = document.getElementById("customise-btn");
const customiseShop = document.getElementById("customise-shop");
const floatingContainer = document.getElementById("floating-points");

cookie.addEventListener("click", (e) => {
  cookies += cookiesPerClick;
  updateScore();

  // Animace "létajícího" textu
  const floating = document.createElement("div");
  floating.classList.add("floating-text");
  floating.textContent = `+${cookiesPerClick}`;

  const colors = ["#ff8c42", "#f72585", "#3a86ff", "#43aa8b", "#ffd166"];
  floating.style.color = colors[Math.floor(Math.random() * colors.length)];

  const offsetX = Math.floor(Math.random() * 100 - 50); // -50 až +50
  const offsetY = Math.floor(Math.random() * 100 - 80); // výš než do stran

  floating.style.left = e.clientX + offsetX + "px";
  floating.style.top = e.clientY + offsetY + "px";

  floating.style.position = "absolute";
  floating.style.fontWeight = "bold";
  floating.style.fontSize = "22px";
  floating.style.pointerEvents = "none";
  floating.style.zIndex = "1000";

  floatingContainer.appendChild(floating);

  setTimeout(() => {
    floating.remove();
  }, 1000);
});

upgradeBtn.addEventListener("click", () => {
  if (cookies >= upgradeCost) {
    cookies -= upgradeCost;
    cookiesPerClick += 1;
    upgradeCost = Math.floor(upgradeCost * 1.7);
    level++;
    upgradeBtn.textContent = `Upgrade (${upgradeCost} 🍪)`;
    updateScore();
    levelDisplay.textContent = `Level: ${level}`;
  }
});

customiseBtn.addEventListener("click", () => {
  customiseShop.classList.toggle("hidden");
});

function updateScore() {
  score.textContent = `Cookies: ${cookies}`;
}











document.getElementById("customise-btn").addEventListener("click", () => {
    const shop = document.getElementById("customise-shop");
    shop.classList.toggle("show");
  });
  
  function buyBackground(type, cost) {
    if (cookies >= cost) {
      cookies -= cost;
      updateScore();
  
      if (type === "pink") {
        document.body.style.background = "#ffe4ec";
      } else if (type === "stars") {
        document.body.style.backgroundImage = "url('obrázky/stars.jpg')";
        document.body.style.backgroundSize = "cover";
      }
    } else {
      alert("Not enough cookies!");
    }
  }
  
  function buyCookie(type, cost) {
    if (cookies >= cost) {
      cookies -= cost;
      updateScore();
  
      if (type === "rainbow") {
        document.getElementById("cookie").src = "obrázky/cookie-rainbow.png";
      }
    } else {
      alert("Not enough cookies!");
    }
  }
  







// function buyBackground(type, cost) {
//     if (cookies >= cost) {
//       cookies -= cost;
//       updateScore();
  
//       if (type === "pink") {
//         document.body.style.background = "#ffe4ec";
//       }
//       // Přidej další styly podle potřeby
//     } else {
//       alert("Not enough cookies!");
//     }
//   }
  
//   function buyCookie(type, cost) {
//     if (cookies >= cost) {
//       cookies -= cost;
//       updateScore();
  
//       if (type === "rainbow") {
//         cookie.src = "obrázky/cookie-rainbow.png"; // nebo jiný obrázek
//       }
//     } else {
//       alert("Not enough cookies!");
//     }
//   }
  