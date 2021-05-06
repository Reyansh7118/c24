class Bird{
  constructor(x,y,radius){
      var D={
          restitution:1,friction:1,density:1
      }
   this.body=Matter.Bodies.circle(x,y,radius,D);
   this.Img=loadImage("sprites/bird.png")
   this.x=x;this.y=y;this.radius=radius;
World.add(world,this.body)
  }
display(){
push ()
this.body.position.x=mouseX
this.body.position.y=mouseY
translate (this.body.position.x,this.body.position.y)
rotate (this.body.angle)
//ellipseMode(RADIUS);
fill ("red")
//ellipse(0,0,this.radius,this.radius)
image (this.Img,0,0,this.radius,this.radius)
pop ()

}

}