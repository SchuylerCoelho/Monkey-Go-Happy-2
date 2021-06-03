var Ground
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score = 0
var SurvivalTime = 0 

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);
  Ground = createSprite(200,370,600,20)
  monkey = createSprite(70,330)
  monkey.addAnimation("running",monkey_running)
  monkey.scale = 0.1
  Ground.velocityX = -2
  FoodGroup = new Group()
  obstacleGroup = new Group()
  
}


function draw() {
background("white");
if(FoodGroup.isTouching(monkey)){
  FoodGroup.destroyEach()
  score = score + 2
}
switch(score){
  case 10: monkey.scale = 0.12;
  break;
  case 20: monkey.scale = 0.14;
  break;
  case 30: monkey.scale = 0.16;
  break;
  case 40: monkey.scale = 0.18;
  break;
  case 50: monkey.scale = 0.20;
  break;
  
}
if(obstacleGroup.isTouching(monkey)){
  monkey.scale = 0.02;
}
text("score"+score,100,100)
  text("SurvivalTime"+SurvivalTime,300,20)
  SurvivalTime = SurvivalTime + Math.round((getFrameRate())/frameCount)
  
  if(Ground.x < 100){
    Ground.x = Ground.width / 2
  }
  if(keyDown ("space")&& monkey.y >250 ){
    monkey.velocityY = -6
  }
  monkey.velocityY = monkey.velocityY +0.5
  monkey.collide(Ground)
 spawnfruits(); 
  spawnObstacle();
 drawSprites(); 
  
  
}
function spawnfruits(){
  if(frameCount % 100 === 0 ){
    banana = createSprite(400,Math.round(random(200,300)))
    banana.addImage(bananaImage)
    banana.velocityX = -3
    banana.scale = 0.1
    FoodGroup.add(banana)
  }
}
function spawnObstacle(){
  if(frameCount % 180 === 0){
    obstacle = createSprite(300,325)
    obstacle.addImage(obstacleImage)
    obstacle.velocityX = -2
    obstacle.scale = 0.2
    obstacleGroup.add(obstacle)
  }
}





