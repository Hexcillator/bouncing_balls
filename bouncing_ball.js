let myBalls = [];
let numberBalls = 30;

function setup() {
  createCanvas(400, 400);

  //create new Ball objets
  myBall = new Ball();
  for (var i = 0; i < numberBalls; i++) {
    myBalls[i] = new Ball();
  }



}

function draw() {
  background(70);
  myBall.draw();
  myBall.move();

  for (var i = 0; i < numberBalls; i++) {
    myBalls[i].draw();
    myBalls[i].move();
  }
  this.rectX = width / 2 - 50;
  this.rectY = height / 2 - 50;
  rect(this.rectX, this.rectY, 100, 100);

}

class Ball {

  constructor() {
    this.size = 15;
    //creates random initial ball coordinates
    this.x = random(0, width);
    this.y = random(0, 100);
    //at different speeds
    this.speedX = (random(2));
    this.speedY = (random(2));
    this.gravity = (random(0.1));
    //random colours
    this.col = color(random(255), random(255), random(255));

  }

  draw() {

    fill(this.col);
    noStroke();
    circle(this.x, this.y, this.size);
  }

  move() {
    //collision detection
    if (this.x < 0) {
      this.speedX *= -1;

    } else if (this.x > width) {
      this.speedX *= -1;

    }
    if (this.y < 0) {
      this.speedY *= -1;

    } else if (this.y > width) {
      this.speedY *= -1;

    }//collision with square
    if (this.y > 150 - this.size && this.y + this.size < 250 + this.size) {

      if (this.x > 150 - this.size && this.x < 250 + this.size) {
        this.speedX *= -1;
        this.speedY *= -1;
      }

    }
    this.x += this.speedX;
    this.y += this.speedY;
//creates gravity effect
    this.speedY = this.speedY + this.gravity;
  }
};
