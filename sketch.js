const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var particles = []
var divisions = []
var plinkos = []

function setup() {
  createCanvas(800,800);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(400,800,800,20)

  for (var x = 0;x <= 800; x = x + 80){
    division = new Division(x,650,10,300)
    divisions.push(division)
  }

  for (var x = 50; x <= 790; x = x + 50){
    plinko = new Plinko(x,75,10)
    plinkos.push(plinko)
  }

  for (var x = 75; x <= 800; x = x + 50){
    plinko = new Plinko(x,175,10)
    plinkos.push(plinko)
  }

  for (var x = 50; x <= 790; x = x + 50){
    plinko = new Plinko(x,275,10)
    plinkos.push(plinko)
  }

  for (var x = 75; x <= 800; x = x + 50){
    plinko = new Plinko(x,375,10)
    plinkos.push(plinko)
  }


}

function draw() {
  background(0);

  Engine.update(engine);

  ground.display();

  for (var i in divisions){
    divisions[i].display();
  }

  for (var i in plinkos){
    plinkos[i].display();
  }

  if (frameCount%60===0){
    particle = new Particle(random(100,700),0,10)
    particles.push(particle);
  }

  for (var i in particles){
    particles[i].display()
  }
}