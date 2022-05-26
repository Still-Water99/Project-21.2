const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine;
var world;
var balls_option;
var balls;
var groundObj;
var leftSide, rightSide;

function preload() {

}

function setup() {
    createCanvas(1500, 700);

    balls_option = {
        restitution: 0.3,
        friction: 0,
        density: 1.2
    }

    engine = Engine.create();
    world = engine.world;

    //Create the Bodies Here.
    groundObj = new Ground(width / 2, 670, width, 20);
    leftSide = new Ground(900, 600, 10, 120);
    rightSide = new Ground(1100, 600, 10, 120);
    ball = Bodies.circle(200, 200, 40, balls_option);
    World.add(world, ball);

    Engine.run(engine);
    rectMode(CENTER);

}


function draw() {
    background(0);
    groundObj.show();
    leftSide.show();
    rightSide.show();
    ellipse(ball.position.x, ball.position.y, 40);
    ellipseMode(RADIUS);
    drawSprites();

}

function keyPressed() {
    if (keyCode === UP_ARROW) {
        Matter.Body.applyForce(ball, { x: 0, y: 0 }, { x: 300, y: -300 });
    }
}
