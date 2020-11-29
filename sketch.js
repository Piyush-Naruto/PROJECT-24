
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperObject;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	
	//paperObject = new pop(200,200,r/2,options);
	ground = new Ground(width/2, height-35, width,10);
	rect1=new Box(750,580,10,130);
	rect2=new Box(650,650,200,10);
	rect3=new Box(550,580,10,130);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  //paper.display();
  ground.display();
  rect1.display();
  rect2.display();
  rect3.display();

  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	   // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	   
	   Matter.Body.applyForce(paperObject,body,paperObject.body.position,{x:80,y:-85});
   
   }
   }