var car;
var wall;
var speed,weight;
var deformation;

function setup() {
createCanvas(1600,400);
car=createSprite(50, 200, 50, 10);
car.shapeColor=color(255,255,255);
wall=createSprite(1500,200,60,200);
wall.shapeColor=rgb(80,80,80);

speed=random(60,90);
weight=random(400,1500);

car.velocityX=speed;

}

function draw() {
background(0,0,0); 

if(car.isTouching(wall))
{
  car.velocityX=0;

  deformation=0.5*weight*speed*speed/22509;
  if(deformation<180 && deformation>100)
  {
    car.shapeColor=color(230,230,0);
  }else if(deformation>180)
  {
    car.shapeColor=color(255,0,0);
  }else if(deformation<100)
  {
    car.shapeColor=color(0,255,0);
  }
}

drawSprites();
}