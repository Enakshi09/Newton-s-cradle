
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5
var rope1,rope2,rope3,rope4,rope5

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	roofSprite=new roof(width/2,height/4, width/7,20);
	//roofSprite.shapeColor=color(255)

	bob1=new bob(width/2,600,100,100)
	bob2=new bob(300,600,100,100)
	bob3=new bob(200,600,100,100)
	bob4=new bob(500,600,100,100)
	bob5=new bob(600,600,100,100)
	rope1=new rope(bob1.body,roofSprite.body,-200,0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("yellow");

  Engine.update(engine)
  
  drawSprites();

  roofSprite.display()
  rope1.display()
  bob1.display()
  //bob2.display()
  //bob3.display()
  //bob4.display()
  //bob5.display()
  
 
}



