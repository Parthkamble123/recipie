class paper{
constructor(x, y){
this.x = x;
this.y = y;
this.paperwidth = 50;
this.paperheight = 50;
this.paper=Bodies.rectangle(this.x,this.y,100,100)
this.image = loadImage("paper.png")
World.add(world, this.paper)
}
display(){
    
    push();
    translate();
    
    rectMode(CENTER);
    rect(this.x, this.y, 0.001 , 0.001);
    imageMode(CENTER)
	image(this.image,this.x,this.y,this.paperwidth,this.paperheight)
    pop();
  }


}