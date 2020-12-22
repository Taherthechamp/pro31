const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight=300;

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  ground1 = new ground(400,390,800,10);
  div1 = new ground(150,310,10,150)
  div2 = new ground(300,310,10,150)
  div3 = new ground(450,310,10,150)
  div4 = new ground(600,310,10,150)
  div5 = new ground(750,310,10,150)

  for(var f=40; f <width; f=f+50)
  {
    plinkos.push(new plinko(f,75));
  }
  for(var f=15; f <width-10; f=f+50)
  {
    plinkos.push(new plinko(f,175));
  }
  
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);

ground1.display();
div1.display();
div2.display();
div3.display();
div4.display();
div5.display();
for(var j=0; j<plinkos.length; j++)
{
 plinkos [j].display();
}

if(frameCount%60===0){
  particles.push(new particle(random(width/2-10, width/2+10), 10,10));
}

for (var i = 0; i <particles.length; i++) {
  particles[i].display();
}

  drawSprites();
}