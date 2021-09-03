var path,boy,coin,bomb
var leftBoundary,rightBoundary
var pathimg,boyimg






function preload(){
  pathimg=loadImage("path.png")
boyimg=loadAnimation("Runner-1.png","Runner-2.png")

}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path=createSprite(200,200);
 path.addImage(pathimg);
 path.velocityY=4;
 path.scale=1.2;

boy=createSprite(200,350,30,30)
boy.addAnimation("running",boyimg)
boy.scale=0.08


leftBoundary=createSprite(0,0,100,800)
leftBoundary.visible=false

rightBoundary=createSprite(410,0,100,800)
rightBoundary.visible=false


}

function draw() {
  background(0);
  path.velocityY=4
  boy.x=World.mouseX
edges=createEdgeSprites()
boy.collide(edges)
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);

 if (path.y>400){
   path.y=height/2
 }

drawSprites()
}
