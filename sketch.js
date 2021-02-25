const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;

var divisionht = 300;

var divisions = [];
var plinko = [];
var particles = [];

function setup() {
  createCanvas(480, 700);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(240, 690, 480, 20);

  for (let i = 0; i <= width; i += 80) {
    divisions.push(new Ground(i, height - divisionht / 2, 10, divisionht));
  }

  for (let i = 20; i <= width; i += 50) {
    plinko.push(new Plinko(i, 50));
  }

  for (let i = 20; i <= width; i += 50) {
    plinko.push(new Plinko(i, 50));
  }

  for (let i = 20; i <= width; i += 50) {
    plinko.push(new Plinko(i, 150));
  }
}

function draw() {
  background(0);
  Engine.update(engine);
  ground.display()
  
  if (frameCount % 60 === 0) {
    particles.push(
      new Particle(random(width / 4 - 10, width / 4 + 10), 10, 10)
    );
  }
  for (let i = 0; i < divisions.length; i++) {
    const element = divisions[i];
    element.display();
  }
  ground.display();
  for (let i = 0; i < plinko.length; i++) {
    const element = plinko[i];
    element.display();
  }
  for (let i = 0; i < particles.length; i++) {
    const element = particles[i];
    element.display();
  }
  drawSprites();
}
