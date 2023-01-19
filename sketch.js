let car1;
let car2;
let car3;

function setup() {
  createCanvas(400, 400);

  car1 = new Car(random(width), random(height));
  car2 = new Car(random(width), random(height));
  car3 = new Car(random(width), random(height));
  console.log(car1);
}

function draw() {
  background(200);
  car1.body();
  car2.body();
  car3.body();
}
class Car {
  constructor(x, y) {
    //ayuda a definir las variables  de las clases
    this.x = x;
    this.y = y;
  }
  body() {
    rect(this.x, this.y, 50, 35);
    c;
  }
}
