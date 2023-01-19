let cars = [];
let personaje1;
let carsNum = 3;
let sceneNum = 0;

function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < carsNum; i++) {
    cars[i] = new Car(
      random(width),
      random(height),
      color(random(255), random(255), random(255))
    );
  }
  personaje1 = new Personaje();
}

function draw() {
  background(200);
  for (let i = 0; i < carsNum; i++) {
    cars[i].body();
    cars[i].move();
  }
  personaje1.body();
  personaje1.move();
  personaje1.home();

  if (keyIsDown(38)) {
    personaje1.y--;
  }
  if (keyIsDown(40)) {
    personaje1.y++;
  }

  switch (sceneNum) {
    case 0:
      console.log("scene 0");

      break; // stop right here & exit

    case 1:
      console.log("scene 1");

      break;

    case 2:
      console.log("scene 2");

      break;
  }
}

class Personaje {
  constructor() {
    this.x = width / 2;
    this.y = height - 50;
    this.c = color(0, 255, 0);
  }
  body() {
    fill(this.c);
    ellipse(this.x, this.y, 30, 30);
  }
  move() {
    if (keyIsDown(38)) {
      this.y -= 3;
    }
    if (keyIsDown(40)) {
      this.y++;
    }
  }
  home() {
    if (this.y < 0) {
      sceneNum++;
      this.y = height - 50;
    }
    if (sceneNum > 2) {
      sceneNum = 0;
    }
  }
}

class Car {
  constructor(x, y, c) {
    //ayuda a definir las variables  de las clases
    this.x = x;
    this.y = y;
    this.c = c;
  }
  body() {
    fill(this.c);
    rect(this.x, this.y, 50, 35);
  }
  move() {
    this.x++;
    if (this.x > width) {
      this.x = 0;
    }
  }
}
