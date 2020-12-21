class Paper{
    constructor(x,y,radius) {
        var options = {
            'isStatic':false,
            'restitution':0.3,
            'friction':0.5,
            'density':1.2
        }

        this.x = x;
        this.y = y;
        this.radius = radius;
        this.body = Bodies.circle(this.x, this.y, this.radius/2, options);
        
        World.add(world, this.body);
      }
      display(){
        
        push();
        translate(this.body.position.x, this.body.position.y);
        rectMode(CENTER);
        fill("purple");
        ellipse(0,0,this.radius,this.radius);

        
        
        
        pop();
      }
}