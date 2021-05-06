class Ground{
  constructor(x,y,width,height){
  var A={isStatic:true
  
  
  }
  this.body=Matter.Bodies.rectangle(x,y,width,height,A)
  this.x=x;this.y=y;this.width=width;this.height=height;
  World.add(world,this.body)
  }
  
  display(){ 
      push ()
      rectMode(CENTER);
      fill ("lime")
  rect(this.body.position.x,this.body.position.y,this.width,this.height)
  pop ()
  }
  
  
  
  
  
  }