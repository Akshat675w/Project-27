
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var bobObj1 , bobObj2 , bobObj3 , bobObj4 , bobObj5;
var roof;
var rope1 ,rope2 , rope3 , rope4 , rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 800);
    engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

   bobObj1 = new Bob(400,400,50);
   bobObj2 = new Bob(380,400,50);
   bobObj3 = new Bob(420,400,50);
   bobObj4 = new Bob(440,400,50);
   bobObj5 = new Bob(360,400,50);

   roof = new Roof(400,200,200,40);

   rope1 = new Rope(roof.x ,roof.y,bobObj1.y, bobObj1.x);
   rope2 = new Rope(roof.x ,roof.y,bobObj2.y, bobObj2.x);
   rope3 = new Rope(roof.x ,roof.y,bobObj3.y, bobObj3.x);
   rope4 = new Rope(roof.x ,roof.y,bobObj4.y, bobObj4.x);
   rope5 = new Rope(roof.x ,roof.y,bobObj5.y, bobObj5.x);
   

   
   

	
  
}


function draw() {
  rectMode(CENTER);
  background("red");
  
  

  bobObj1.display();
  bobObj2.display();
  bobObj3.display();
  bobObj4.display();
  bobObj5.display();

  roof.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();


  drawSprites();
 
}



