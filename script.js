let dragArea = document.getElementById("dragArea");
let lamp = document.getElementById("lamp");
let loginBox = document.getElementById("loginBox");

let startY = 0;
let dragging = false;

dragArea.addEventListener("mousedown", (e) => {
  startY = e.clientY;
  dragging = true;
});

document.addEventListener("mousemove", (e) => {
  if (!dragging) return;

  let diff = e.clientY - startY;

  if (diff > 55) { 
    activateLamp();
    dragging = false;
  }
});

document.addEventListener("mouseup", () => {
  dragging = false;
});

function activateLamp() {
  // Change background
  document.body.classList.add("gradient-bg");

  // Switch lamp image
  lamp.src = "lamp_happy.png";
  lamp.style.filter = "brightness(200%)";

  // Show login
  loginBox.style.display = "block";
}
function login() {
  let user = document.getElementById("username").value;
  let pass = document.getElementById("password").value;

  // ===== SET YOUR CUSTOM LOGIN HERE =====
  let correctUser = "MyLove";        // change this
  let correctPass = "06-02-2005";         // change this
  // ======================================

  if (!user.trim() || !pass.trim()) {
    alert("Enter username & password!");
    return;
  }

  if (user === correctUser && pass === correctPass) {
      window.location.href = "timer.html";
  } else {
    alert("Baby try again !");
  }
}


// -------- FLOATING GLITTER BACKGROUND --------
const canvas = document.getElementById("glitterCanvas");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener("resize", resizeCanvas);

let particles = [];
let count = 120;

function createParticles() {
  particles = [];
  for (let i = 0; i < count; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2 + 1,
      speedY: Math.random() * 0.6 + 0.3,
      opacity: Math.random() * 0.5 + 0.3
    });
  }
}

function animateGlitter() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach(p => {
    ctx.beginPath();
    ctx.fillStyle = `rgba(255,255,255,${p.opacity})`;
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fill();

    p.y += p.speedY;
    if (p.y > canvas.height) {
      p.y = -5;
      p.x = Math.random() * canvas.width;
    }
  });

  requestAnimationFrame(animateGlitter);
}

createParticles();
animateGlitter();


