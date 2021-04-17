class Sand{
    constructor(x,y,r){
       var options = {
           restitution:0.3,
           friction: 0.1,
           density:1.2
       }
       this.x = x;
       this.y = y;
       this.r = r;
       this.body = Bodies.circle(this.x,this.y,(this.r-20)/2,options);
       World.add(world, this.body);
   }
   display(){
       var sandpos = this.body.position;
       push();
       translate(sandpos.x,sandpos.y);
       strokeWeight(3);
       stroke('black');
       ellipseMode(CENTER);
       ellipse(0,0,this.r,this.r);
       pop();
   }
    
}