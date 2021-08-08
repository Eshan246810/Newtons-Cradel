
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var world,engine ;
var bob1,bob2,bob3, bob4,bob5, roofA;
var string1,string2,string3,string4,string5;


function setup() {
	createCanvas(800, 500);
    rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	roofA = new Roof(400,250,230,20);
	bob1 = new Bob(320,575);
	bob2 = new Bob(360,575);
	bob3 = new Bob(400,575);
	bob4 = new Bob(440,575);
	bob5 = new Bob(480,575);
	
	
	string1=new String(bob1.body,roofA.body,-80,0);
	string2=new String(bob2.body,roofA.body,-40,0);
	string3=new String(bob3.body,roofA.body,0,0);
	string4=new String(bob4.body,roofA.body,40,0);
	string5=new String(bob5.body,roofA.body,80,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255, 102, 0);
  roofA.display();

  string1.display();
  string2.display();
  string3.display();
  string4.display();
  string5.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
 
}

function keyPressed(){
  if(keyCode===32){
   Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45})
  }
}

