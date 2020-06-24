
class Bird {
    constructor(x, y) {
      var options = {
          'restitution':0.3,
          'friction':1,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, 35, 35, options);
      this.width = 35;
      this.height = 35;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      pos.x = mouseX
      pos.y = mouseY
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(4);
      stroke("aquamarine")
      fill(100)
      rect(0, 0, this.width, this.height);
      pop();
    }
  }