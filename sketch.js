
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground1, paper1, dustbin1
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground1= new box(350,700,900,40);
    paper1= new paper(200, 650, 40,40);
	box1= new box(700,650,100,10)
    box2= new box(650,600,10,100)
    box3= new box(750,600,10,100)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground1.display();
  paper1.display();
  box1.display();
  box2.display();
  box3.display();
  drawSprites();
  if (keyDown("UP_ARROW")) {
    Matter.Body.applyForce(paper1.body,paper1.body.position, {x:30,y:-62})
  }
}



