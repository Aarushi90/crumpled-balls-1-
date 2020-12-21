class Dustbin{
    constructor(x, y) {
        var options = {
            isStatic:true
        }
        this.x = x;
        this.y = y;
        this.width = 200;
        this.height = 100;
        this.thickness = 20;
        
        
        this.body1 = Bodies.rectangle(this.x, this.y, this.width, this.thickness, options);
            
        World.add(world, this.body1);
        
        this.body2 = Bodies.rectangle(this.x-this.width/2, this.y-this.height/2, this.thickness, this.height, options);
            
        World.add(world, this.body2);

        this.body3 = Bodies.rectangle(this.x+this.width/2, this.y - this.height/2, this.thickness, this.height, options);
            
        World.add(world, this.body3);
      }
      display(){
        var posBottom = this.body1.position;
        var posLeft = this.body2.position;
        var posRight = this.body3.position;

        push()
			translate(posLeft.x, posLeft.y);
			rectMode(CENTER)
			//strokeWeight(4);
			fill(255);
            stroke(255);
            rect(0,0,this.thickness, this.height);
			pop()

			push()
			translate(posRight.x, posRight.y);
			rectMode(CENTER)
			//strokeWeight(4);
			stroke(255)
			fill(255)
			rect(0,0,this.thickness, this.height);
			pop()

			push()
			translate(posBottom.x, posBottom.y);
			rectMode(CENTER)
			//strokeWeight(4);
			stroke(255)
			fill(255)
			rect(0,0,this.width, this.thickness);
			pop()
      }
}