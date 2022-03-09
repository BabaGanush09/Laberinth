var Gbackground, GbackgroundImg;
var Miles, milesImg;
var maze,mazeImg;
var Wall;


function preload(){
  GbackgroundImg = loadImage("GalaxyBackground.jpg")
 milesImg = loadImage("miles.png");
 mazeImg = loadImage("maze.png");
}

function setup(){
  createCanvas(windowWidth, windowHeight);
Gbackground = createSprite(width/2, height/2);
Gbackground.addImage(mazeImg);
Gbackground.scale= 10;
Miles = createSprite(-1240, -1555);
Miles.addImage(milesImg);
Miles.scale = 0.2
maze = createSprite(width/2, height/2);


}


function draw(){
  background("white");
Miles.velocityY=0;
Miles.velocityX=0;
Miles.collide(maze);
if(keyIsDown(87)){
  Miles.velocityY=-17;
}
if(keyIsDown(83)){
  Miles.velocityY=+17;
}
if(keyIsDown(65)){
  Miles.velocityX=-17;
}
if(keyIsDown(68)){
  Miles.velocityX=+17;
}
camera.position.y=Miles.y;
camera.position.x=Miles.x;


console.log(mouseY);
console.log(mouseX);

drawSprites();

}
