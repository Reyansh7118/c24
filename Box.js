class Box{
  constructor(x,y,width,height){
      var B={
          restitution:0.5,friction:2.5,density:1
      }
      this.body=Matter.Bodies.rectangle(x,y,width,height,B)
      this.Img=loadImage("sprites/wood1.png")
      this.x=x;this.y=y;this.width=width;this.height=height;
      World.add(world,this.body)
  }
  display(){
      push ()
      translate (this.body.position.x,this.body.position.y)
      rotate (this.body.angle)
        //  rectMode(CENTER);
          fill ("Cyan")
      //rect(0,0,this.width,this.height)
      imageMode(CENTER);
      image(this.Img,0,0,this.width,this.height)
  pop ()
  }
  
  
  
  }
  