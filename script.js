const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const question = document.getElementById("question");
const buttons = document.getElementById("buttons");
const celebration = document.getElementById("celebration");
const card = document.getElementById("card");
const timerText = document.getElementById("timer");
const fireworksSound = document.getElementById("fireworksSound");
const loveSong = document.getElementById("loveSong");

// PERSONALIZATION
const name = "Simmy";

// TIMER
let seconds = 0;
const timer = setInterval(() => {
  seconds++;
  timerText.textContent = `Time elapsed: ${seconds}s ⏳`;
}, 1000);

// NO BUTTON FUNNY TEXTS
const noTexts = [
  "Seriously, Simmy? 🤨",
  "Don’t even try 😌",
  "You KNOW the answer 😏",
  "You’re stuck with me 💕",
  "This is getting embarrassing 😂",
  "Wrong choice, sir 🚫",
  "Nice try, Simmy 😇",
  "Just press YES already 💖"
];

let noIndex = 0;

// AGGRESSIVE SHAKE + ESCAPE
noBtn.addEventListener("mouseover", () => {
  noBtn.classList.add("shake");

  const cardRect = card.getBoundingClientRect();
  const x = Math.random() * (cardRect.width - noBtn.offsetWidth);
  const y = Math.random() * (cardRect.height - noBtn.offsetHeight);

  noBtn.style.position = "absolute";
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;

  noBtn.textContent = noTexts[noIndex % noTexts.length];
  noIndex++;

  setTimeout(() => noBtn.classList.remove("shake"), 300);
});

// YES BUTTON
yesBtn.addEventListener("click", () => {
  clearInterval(timer);

  question.textContent = `🎉 Congratulations ${name}! You have made the CORRECT decision 💖`;
  timerText.textContent = `Decision made in ${seconds} seconds ⏱️`;

  buttons.classList.add("hidden");
  celebration.classList.remove("hidden");

  // Fireworks sound
  fireworksSound.play();

  // Love song (YouTube embed)
  loveSong.src = "https://www.youtube.com/embed/NGFToiLtXro?autoplay=1&start=5";

  startConfetti();
  spawnKisses();
  spawnPeanutSimmy();
});

// CONFETTI
const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let confetti = [];

function startConfetti() {
  for (let i = 0; i < 150; i++) {
    confetti.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 6 + 2,
      d: Math.random() * 5 + 2,
      color: `hsl(${Math.random() * 360}, 100%, 70%)`
    });
  }
  requestAnimationFrame(drawConfetti);
}

function drawConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  confetti.forEach(c => {
    ctx.beginPath();
    ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
    ctx.fillStyle = c.color;
    ctx.fill();
    c.y += c.d;
  });
  requestAnimationFrame(drawConfetti);
}

// KISSES
function spawnKisses() {
  setInterval(() => {
    const kiss = document.createElement("div");
    kiss.className = "kiss";
    kiss.textContent = "💋";
    kiss.style.left = Math.random() * window.innerWidth + "px";
    document.body.appendChild(kiss);
    setTimeout(() => kiss.remove(), 3000);
  }, 300);
}

// PEANUT ❤️ SIMMY FLOATING
function spawnPeanutSimmy() {
  setInterval(() => {
    const text = document.createElement("div");
    text.className = "peanut";
    text.textContent = "🥜 Peanut 💕 Simmy";
    text.style.left = Math.random() * window.innerWidth + "px";
    text.style.fontSize = Math.random() * 14 + 14 + "px";
    text.style.opacity = Math.random() * 0.6 + 0.4;
    document.body.appendChild(text);
    setTimeout(() => text.remove(), 6000);
  }, 400);
}

// SLIDESHOW LOGIC
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

setInterval(() => {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add("active");
}, 5000);
