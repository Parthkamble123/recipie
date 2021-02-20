
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var d1
var paperObj;
var p1;
function preload(){
d1 = loadImage("dustbingreen.png")
p1 = loadImage("paper.png")
}



function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

    var paper_options={
	isStatic:false
    
} 


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,550);
    paperObj=new paper(400,645,paper_options)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 if(keyDown("UP ARROW")){
	Matter.Body.setAngularVelocity(paper, 30)
	paper.angle=30;
	paper.angularVelocity=10; 
}

  groundObject.display();
  dustbinObj.display(d1);
  paperObj.display(p1)

}

