const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "Better is cuz i love you too hehe!";
  gif.src =
    "https://media1.giphy.com/media/iCVzZwwE6QNAV2tEE0/giphy.gif";
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});
const canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');

// watch for browser resizing, reinitialize stars
window.addEventListener('resize', function() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  init();
});


function Star(x, y, width, speed) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.speed = speed;
  this.color = "#fff";
  
  this.draw = function() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, width, width);
  }

  this.update = () => {
    // check bounds
    if (this.x + this.width > innerWidth) {
      this.x = 0;
    }
    this.x += this.speed;

    this.draw();
  }
}
