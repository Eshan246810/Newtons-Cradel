class Roof {

constructor(x,y,w,h){

  var options={
      isStatic: true
  }
  this.x=x;
  this.y=y;
  this.w=w;
  this.h=h;
  this.body=Bodies.rectangle(x,y,w,h,options);
  World.add(world,this.body);
} 

  display(){

   var groundPos=this.body.position;
  
   Push();
   translate(groundPos.x,groundPos.y);
   rectMode(CENTER);
   fill(0, 102, 255);
   pop();
    
  }
}