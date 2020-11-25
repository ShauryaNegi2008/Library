var fixedRect,movingRect
var gameObject1,gameObject2,gameObject3,gameObject4
function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(200,200,50,80);
  movingRect = createSprite(400,200,80,30);

  gameObject1 = createSprite(100,100,50,50);
  gameObject1.shapeColor="green";
 

  gameObject2 = createSprite(200,100,50,50);
  gameObject2.shapeColor="green";
 
  gameObject3 = createSprite(300,100,50,50);
  gameObject3.shapeColor="green";
 
  gameObject4 = createSprite(400,100,50,50);
  gameObject4.shapeColor="green";
 

  fixedRect.shapeColor="green";
  movingRect.shapeColor="green";

 movingRect.debug=true
 fixedRect.debug=true
 
 gameObject1.debug=true
 gameObject2.debug=true
 gameObject3.debug=true
 gameObject4.debug=true
}

function draw() {
  background(0,0,0);  

   movingRect.x = World.mouseX;
   movingRect.y = World.mouseY;




   
  if(isTouching(movingRect,gameObject1)){
    gameObject1.shapeColor="red"
    movingRect.shapeColor="red"
  }else{
    gameObject1.shapeColor="green"
    movingRect.shapeColor="green"

  }


  if(isTouching(movingRect,gameObject2)){
    gameObject2.shapeColor="red"
    movingRect.shapeColor="red"
  }else{
    gameObject2.shapeColor="green"
    movingRect.shapeColor="green"

  }
  
  
 
  drawSprites();
}



