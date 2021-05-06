class Pig{
  constructor(x,y,radius){
      var C={
          restitution:0.5,friction:1.5,density:1
           }
           this.body=Matter.Bodies.circle(x,y,radius,C)
           this.Img=loadImage("sprites/enemy.png")
           this.x=x;this.y=y;this.radius=radius;
           Matter.World.add(world,this.body)
  }  
  display(){
       push ()
       translate (this.body.position.x,this.body.position.y)
       rotate (this.body.angle)
      // ellipseMode(RADIUS)
       fill ("orange")
      // ellipse(0,0,this.radius,this.radius)
      image (this.Img,0,0,this.radius,this.radius)
       pop ()
  }
  }