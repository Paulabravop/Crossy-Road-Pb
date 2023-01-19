let car1;
let car2;
let car3;
let cars = [];

function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < 10; i++) {
    cars[i] = new Car(random(width), random(height));
  }
}

function draw() {
  background(200);
  for (let i = 0; i < 10; i++) {
    cars[i].body();
    cars[i].move();
  }
}
class Car {
  constructor(x, y) {
    //ayuda a definir las variables  de las clases
    this.x = x;
    this.y = y;
  }
  body() {
    rect(this.x, this.y, 50, 35);
  }
  move() {
    this.x++;
    if (this.x > width) {
      this.x = 0;
    }
  }
}
