class Log{
  constructor(x,y,width,height,angle){
      var B={
          restitution:0.8,friction:1,density:1
      }
      this.body=Matter.Bodies.rectangle(x,y,width,height,B)
      this.Img=loadImage("sprites/wood2.png")
      this.x=x;this.y=y;this.width=width;this.height=height;
      Matter.Body.setAngle(this.body,angle)
      World.add(world,this.body)
  }
  display(){
      push ()
      translate (this.body.position.x,this.body.position.y)
      rotate (this.body.angle)
        //  rectMode(CENTER);
          fill ("Cyan")
      //rect(0,0,this.width,this.height)
      image(this.Img,0,0,this.width,this.height)
  pop ()
  }
  
  
  
  }