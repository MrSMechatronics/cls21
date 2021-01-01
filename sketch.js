var carA, carB, carC, carD, wall;
var cA, cB, cC, cD; 
var dA, dB, dC, dD; 
var sA, sB, sC, sD; 
var wA, wB, wC, wD; 

function setup() {
  createCanvas(1600,400);
  createSprite(width/2, 000, width, 5);
  createSprite(width/2, 100, width, 5);
  createSprite(width/2, 200, width, 5);
  createSprite(width/2, 300, width, 5);
  createSprite(width/2, 400, width, 5);

  sA = random(55, 90), sB = random(55, 90), sC = random(55, 90), sD = random(55, 90);
  wA = random(400, 1500), wB = random(400, 1500), wC = random(400, 1500), wD = random(400, 1500); 
  dA = (0.5 * wA * (sA ** 2))/25500 , dB = (0.5 * wB * (sB ** 2))/25500, dC = (0.5 * wC * (sC ** 2))/25500, dD = (0.5 * wD * (sD ** 2))/25500; 

  if(dA > 180){
    cA = color(255, 0, 0);
  }else if(dA > 100){
    cA = color(255, 255, 0);
  }else{
    cA = color(0, 255, 0);
  }

  if(dB > 180){
    cB = color(255, 0, 0);
  }else if(dB > 100){
    cB = color(255, 255, 0);
  }else{
    cB = color(0, 255, 0);
  }

  if(dC > 180){
    cC = color(255, 0, 0);
  }else if(dC > 100){
    cC = color(255, 255, 0);
  }else{
    cC = color(0, 255, 0);
  }

  if(dD > 180){
    cD = color(255, 0, 0);
  }else if(dD > 100){
    cD = color(255, 255, 0);
  }else{
    cD = color(0, 255, 0);
  }

  carA = createSprite(50, 050, 30, 15);
  carB = createSprite(50, 150, 30, 15);
  carC = createSprite(50, 250, 30, 15);
  carD = createSprite(50, 350, 30, 15);
  carA.velocityX = sA;
  carB.velocityX = sB;
  carC.velocityX = sC;
  carD.velocityX = sD;
  wall = createSprite(width - 10/2, height/2, 10, height);


}

function draw() {
  background(255,255,255);
  if(carA.isTouching(wall)){
    carA.shapeColor = cA;
    carA.collide(wall)
  }
  if(carB.isTouching(wall)){
    carB.shapeColor = cB;
    carB.collide(wall)
  }
  if(carC.isTouching(wall)){
    carC.shapeColor = cC;
    carC.collide(wall)
  }
  if(carD.isTouching(wall)){
    carD.shapeColor = cD;
    carD.collide(wall)
  }
  drawSprites();
}