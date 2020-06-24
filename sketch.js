const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
 pig1 = new pig(200,300)
 pig2 = new pig(200, 250, 50, 50)
    box1 = new Box(125,300,50,50);
    box2 = new Box(275,300,50,50);
    box3= new Box (125, 250, 50,50);
    box4 = new Box(275, 200, 50, 50)
box5 = new Box(200, 100, 50, 50);
    log1 = new log(200,250,200,PI/2)
    log2 = new log(200, 150, 200, PI/2)
    log3 = new log (150, 100, 125, PI/7)
    log4 = new log (250, 100, 125, -PI/7)
    ground = new Ground(200,height,400,20)
    bird = new Bird(100, 200)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display()
    pig1.display();
    log1.display();
    log2.display();
    pig2.display();
    log3.display();
    log4.display()
    bird.display();
    ground.display();
}