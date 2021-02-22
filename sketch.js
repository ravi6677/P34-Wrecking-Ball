const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg, hero, monster, ground, fly;
var b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12, b13, b14, b15, b16, b17, b18, b19, b20, b21, b22, b23, b24, b25;

function preload() {
//preload the images here
  backgroundImg = loadImage("images/GamingBackground.png");
}

function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;
  // create sprites here

  hero = new Hero(165,385,300,200);
  monster = new Monster(1150,385,350,400);
  ground = new Ground(350,500,1000,25);
  fly = new Fly(hero.body,{x:350, y:150});
  
  b1 = new Block(400,490,40,40);
  b2 = new Block(400,450,40,40);
  b3 = new Block(400,410,40,40);
  b4 = new Block(400,370,40,40);
  b5 = new Block(400,330,40,40);
  b6 = new Block(400,290,40,40);
  b7 = new Block(400,250,40,40);
  b8 = new Block(400,210,40,40);

  b9 = new Block(475,490,40,40);
  b10 = new Block(475,450,40,40);
  b11 = new Block(475,410,40,40);
  b12 = new Block(475,370,40,40);
  b13 = new Block(475,330,40,40);

  b14 = new Block(550,490,40,40);
  b15 = new Block(550,450,40,40);
  b16 = new Block(550,410,40,40);
  b17 = new Block(550,370,40,40);
  b18 = new Block(550,330,40,40);
  b19 = new Block(550,290,40,40);
  b20 = new Block(550,250,40,40);

}

function draw() {
  background(backgroundImg);
  Engine.update(engine);

  hero.display();
  monster.display();
  ground.display();
  fly.display();

  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b8.display();

  b9.display();
  b10.display();
  b11.display();
  b12.display();
  b13.display();

  b14.display();
  b15.display();
  b16.display();
  b17.display();
  b18.display();
  b19.display();
  b20.display();
}

function mouseDragged(){
  Matter.Body.setPosition(hero.body, {x: mouseX, y:mouseY});
}

