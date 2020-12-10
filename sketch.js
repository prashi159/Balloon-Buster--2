var backGround , backGroundImage;
var bow, bowImage;
var redBalloon, greenBalloon, blueBalloon, pinkBalloon;
var redImage, greenImage, blueImage, pinkImage;
var arrow, arrowImage;



function preload(){
  backGroundImage = loadImage("background0.png");
  bowImage = loadImage("bow0.png");
  redImage = loadImage("red_balloon0.png");
  greenImage = loadImage("green_balloon0.png");
  blueImage = loadImage("blue_balloon0.png");
  pinkImage = loadImage("pink_balloon0.png");
  arrowImage = loadImage("arrow0.png");
  
}

function setup() {
  createCanvas(300, 300);
  
  backGround = createSprite(150,100,300,300);
  backGround.addImage(backGroundImage);
  backGround.x = backGround.width/2;
  backGround.velocityX = -7;
  
  bow = createSprite(280,150,20,100);
  bow.addImage(bowImage);
  bow.scale = 0.7;
  
}

function draw() {
  
   background(220)
   bow.y = World.mouseY;
  
  if(backGround.x < 120){
    backGround.x = backGround.width/2;
    
  }
  
  
  
  for(i = 60; i < 300; i = i+40){
    redBalloon = createSprite(20,i,20,40);
    redBalloon.addImage(redImage);
    redBalloon.scale = 0.06;
 }
  for(i = 100; i < 300; i = i+40){
     greenBalloon = createSprite(50,i,20,40);
     greenBalloon.addImage(greenImage);
     greenBalloon.scale = 0.06;
  }
  for(i = 140; i < 300; i = i+40){
     blueBalloon = createSprite(80,i,20,40);
     blueBalloon.addImage(blueImage);
     blueBalloon.scale = -0.06;
  }
  for(i = 180; i < 300; i = i+40){
     pinkBalloon = createSprite(110,i,20,40);
     pinkBalloon.addImage(pinkImage);
     pinkBalloon.scale = 0.7;
  }
  
  // release arrow when space key is pressed
  if (keyDown("space")) {
    var temp_arrow = createArrow();
    temp_arrow.addImage(arrowImage);
     temp_arrow.y = bow.y;
  }
  
  drawSprites();
  
   
}


// Creating  arrows for bow
function createArrow() {
  arrow= createSprite(360, 100, 5, 10);
  arrow.velocityX = -6;
  arrow.scale = 0.3;
  return arrow;
}


