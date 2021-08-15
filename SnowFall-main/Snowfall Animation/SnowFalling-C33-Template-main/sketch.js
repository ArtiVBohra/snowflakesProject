const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var bg
var world;
var snowFlakes,snow
var snowArray = [];
function preload() {
  bg = loadImage("snow3.jpg");
  //snowFlakes = loadImage("snow4.webp")
}

function setup() {
  createCanvas(800,400);
  engine=Engine.create()
  world=engine.world
  snow = new Snow(400,5,30,50)
  for(var i = 0;i < 1000 ; i = i+10){
    snowArray.push(new Snow(Math.round(random(10,width-10)),i,50,50));
    }
 }

function draw() {
  Engine.update(engine)
  background(bg);  
  for(var i = 0;i < snowArray.length ; i++){
    snowArray[i].display();
    
    }
  drawSprites();
  snow.display();
}

























