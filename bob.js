class Bob {
  constructor(x,y){

     var options={
       isStatic:false,
       restitution:1,
       firction:0,
       density:0.8,

     }
    this.x=x;
    this.y=y;
    this.r=20;

    this.body=Bodies.circle(this.x,this.y,this.r,options)
    World.add(world,this.body);

  }
  display(){
   var bobPos = this.body.position;
   push();
   translate(bobPos.x.bobPos.y);
   rectMode(CENTER);
   fill("orange");
   ellipse(0,0,this.r,this.r);
   pop();

  }


























}