import './style.scss';
const canvas = document.getElementById('dotsCanvas');
const ctx = canvas.getContext('2d');

let dots = [];
const dotCount = 20;

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

function createDots() {
  for (let i = 0; i < dotCount; i++) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const speedX = Math.random() * 1 - 0.5;
    const speedY = Math.random() * 1 - 0.5;
    const size = Math.random() * 1 + 1;

    dots.push({ x, y, speedX, speedY, size });
  }
}

function drawDots() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  let x = 0;
  for (let dot of dots) {
    ctx.beginPath();
    ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
    ctx.fillStyle = x % 2 === 0 ? '#535bf2' : '#241f2c';
    ctx.fill();

    dot.x += dot.speedX;
    dot.y += dot.speedY;

    if (dot.x < 0 || dot.x > canvas.width) {
      dot.speedX = -dot.speedX;
    }
    if (dot.y < 0 || dot.y > canvas.height) {
      dot.speedY = -dot.speedY;
    }
  }

  requestAnimationFrame(drawDots);
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();
createDots();
drawDots();
