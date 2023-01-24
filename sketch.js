let cars = [];
let personaje1;
let carsNum = 7;
let sceneNum = 0;
let vidasPersonaje = 4;

let piloto;
let vidas;
let carImg = [];
let road;
var backgroundImg;
let over;

function preload() {
  piloto = loadImage("images/piloto.png");
  over = loadImage("images/over.png");

  backgroundImg = loadImage("images/calle.png");

  for (let i = 0; i < 7; i++) {
    carImg[i] = loadImage("images/car" + i + ".png");
  }
}

function setup() {
  over = loadImage("images/over.png");
  // prueba canvas
  createCanvas(600, 600);

  //////////////////////////////////////// POSITION CANVA FONDO ////////////////////////
  for (let i = 0; i < 7; i++) {
    cars[i] = new Car(
      random(width),
      random(height - 150)
      // color(random(255), random(255), random(255))
    );
  }
  personaje1 = new Personaje();
  loadImage("images/over.png"),
    (img) => {
      over(img, 140, 0);
    };
}

function draw() {
  image(over, 0, 0);
  background(200);

  background(backgroundImg);

  ///////////////////activa position fondo/////////////////
  //background.postion(20, 30);

  //for (let i = 0; i < 3; i++) {
  // image(carImg[i], i * 30, 30, carImg[i].width * 0.5, carImg[i].height * 0.5);
  //}

  for (let i = 0; i < carsNum; i++) {
    cars[i].body(i);
    cars[i].move();
    cars[i].checkCollision();
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

  //
  currentVidasPersonaje();
}

function currentVidasPersonaje() {
  for (let i = 0; i < vidasPersonaje; i++) {
    //ellipse(i * 20, height - 30, 20);
    image(piloto, i * 35, height - 50, 30, 30);
  }
}

class Personaje {
  constructor() {
    this.x = width / 2;
    this.y = height - 50;
    this.w = 80;
    this.h = 30;
    this.c = color(0, 255, 0);
  }
  body() {
    //fill(this.c);
    //ellipse(this.x, this.y, this.w, this.h);

    imageMode(CENTER);
    image(piloto, this.x, this.y, piloto.width / 4, piloto.height / 4);
  }
  move() {
    if (keyIsDown(38)) {
      this.y -= 3;
      //velocidad movimiento
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
    this.w = 50;
    this.h = 35;
    this.c = c;
  }
  body(index) {
    //fill(this.c);
    //rect(this.x, this.y, this.w, this.h);

    imageMode(CENTER);
    image(
      carImg[index],
      this.x - 2,
      this.y - 20,
      carImg[index].width * 1,
      carImg[index].height * 1
    );
  }
  move() {
    this.x++;
    if (this.x > width) {
      this.x = 0;
    }
  }
  checkCollision() {
    if (
      personaje1.x + personaje1.w / 2 > this.x &&
      personaje1.x < this.x + this.w &&
      personaje1.y + personaje1.h / 2 > this.y &&
      personaje1.y < this.y + this.h
    ) {
      console.log("bumped!");
      personaje1.y = height - 5;
      vidasPersonaje--;
      //reset posicion personaje
    }
    if (vidasPersonaje < 1) {
      image(over, 300, 299);
    }
    if (vidasPersonaje < 0) {
      image(over, 300, 299);
    }
  }
}
