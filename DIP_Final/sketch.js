let images = [];
let currentIndex = 1;
let peace, bomb;
let leftClicks = 0;
let rightClicks = 0;
let particles = [];

function preload() {
  images[0] = loadImage('./life.png');
  images[1] = loadImage('./war.png');
  images[2] = loadImage('./damage.png');
  peace = loadImage('./peace.png');
  bomb = loadImage('./bomb.png');
}

function setup() {
  createCanvas(500, 500); // 根據圖片大小調整
}

function draw() {
  background(255);
  image(images[currentIndex], 0, 0, width, height);
  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].update();
    particles[i].show();
    if (particles[i].isFinished()) {
      particles.splice(i, 1);
    }
  }
}

function mousePressed() {
  let p;
  if (!keyIsDown(SHIFT)) {
    leftClicks++;
    p = new Particle(mouseX, mouseY, peace);
    if (leftClicks >= 5) {
      currentIndex = 0;
      leftClicks = 0; // 重置點擊次數
    }
  } else{
    rightClicks++;
    p = new Particle(mouseX, mouseY, bomb);
    if (rightClicks >= 5) {
      if(currentIndex < 2){
        currentIndex++;
      }
      rightClicks = 0; // 重置點擊次數
    }
  }
  if(p){
    particles.push(p);
  }
}

class Particle {
  constructor(x, y, img) {
    this.position = createVector(x, y);
    this.velocity = createVector(0, 5); // 向下掉落
    this.img = img;
    this.lifespan = 100;
  }

  update() {
    this.position.add(this.velocity);
    this.lifespan -= 5;
  }

  show() {
    tint(255, this.lifespan+100); // 使用透明度
    image(this.img, this.position.x, this.position.y, 50, 50);
    noTint();
  }

  isFinished() {
    return this.lifespan < 0;
  }
}