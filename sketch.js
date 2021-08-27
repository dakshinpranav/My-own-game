var jake,bomb,coin,energydrink,path,power,battery,lowbattery;
var mediumbattery,emptybattery;
var batterycounter;
var scorecounter=0;

function preload (){
  jake=loadAnimation("jake1.png","jake2.png","jake3.png","jake4.PNG","jake5.png");
  bomb=loadImage("bomb.png");
  coin=loadImage("coin.png");
  energyDrink=loadImage("energyDrink.png");
  path=loadImage("path.png");
  power=loadImage("power.png");
  battery=loadImage("fullpower.PNG");
  mediumbattery=loadImage("mediumpower.png");
  lowbattery=loadImage("lowpower.png");
  emptybattery=loadImage("emptyPower.png");
  
}
function setup(){
  createcanvas(400,400);
  //path sprite
  movingPath=createSprite(200,200,10,10);
  movingPath.addImage("movingPath",path);
  movingPath.velocity=5;
  
  //jake sprite
  jakerunning=createSprite(110,300,10,10);
  jakerunning.addAnimation("jakerunning",jake);
  jakerunning.scale=0.5;
  
  //bomb sprite
  bombMoving=createSprite(110,-1000,10,10);
  bombMoving.addImage("bomb",bomb);
  bombMoving.velocity=5;
  bombMoving.scale=0.10;
  
  bombMoving2=createSprite(210,-4500,10,10);
  bombMoving2.addImage("bomb",bomb2);
  bombMoving2.velocity=5;
  bombMoving2.scale=0.10;
  
  bombMoving3=createSprite(310,-2130,10,10);
  bombMoving3.addImage("bomb",bomb3);
  bombMoving3.velocity=5;
  bombMoving3.scale=0.10;
  
  //coin sprite
  coinMoving=createSprite(110,-3400,10,10);
  coinMoving.addImage("coinMoving",coin);
  coinMoving.velocity=5;
  coinMoving.scale=0.5;
  
  coinMoving2=createSprite(110,-2900,10,10);
  coinMoving2.addImage("coinMoving2",coin);
  coinMoving2.velocity=5;
  coinMoving2.scale=0.5;
  
  coinMoving3=createSprite(310,-3210,10,10);
  coinMoving3.addImage("coinMoving3",coin);
  coinMoving3.velocity=5;
  coinMoving3.scale=0.5;
  
  //power sprite
  powerup=createSprite(110,-4800,10,10);
  powerup.addImage("powerup",power);
  powerup.scale=0.1
  powerup.velocity=5;
  
  powerup2=createSprite(210,-7865,10,10);
  powerup2.addImage("powerup2",power);
  powerup2.scale=0.1
  powerup2.velocity=5;
  
  powerup3=createSprite(310,-9456,10,10);
  powerup3.addImage("powerup3",power);
  powerup3.scale=0.1
  powerup3.velocity=5;
  
  //jake battery
  jakebattery=createsprite(350,350,10,10);
  jakebattery.addImage("jakebattery",battery);
  jakebattery.scale=0.1;
  
}


function draw() {
  background("#9d6e5e");
  //batteryCounter
  fill("black");
  //text("B: " + batteryCounter, 355, 320);
  textSize(15);
  text("Score:", 353, 50);
  text(scoreCounter, 373, 65);
  
  if(movingPath.y>400){
    movingPath.y=movingPath.width/2;
  }
 drawSprites(); 
}