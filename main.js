var gameFPS = 50;
var canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d"),
    width = 500,
    height = 200,
    player = {
      x : width / 2,
      y : height - 5,
      width : 5,
      height : 5,
      speed : 3,
      MovementX : 0,
      MovementY : 0,
      jumping : false
    },
    keys = [],
    friction = 0.9,
    gravity = 0.1;

    var boxes = []        //Array voor de voorwerpen
    //Dimensies
    boxes.push({
      x: 0,
      y: 0,
      width: 10,
      height: height
    });
    boxes.push({
      x: 0,
      y: height - 2,
      width: width,
      height: 50
    });
    boxes.push({
      x: width - 10,
      y: 0,
      width: 50,
      height: height
    });
 
canvas.width = width;
canvas.height = height;
 
function update(){
  // De toetsen
  if (keys[38]){
    // Up Arrow toets
    if(player.jumping == false){
      player.jumping = true;
      player.MovementY = -player.speed * 2;
    }
  }
  if (keys[39]){
    // Right Arrow toets
    if(player.MovementX < player.speed){
      player.MovementX++
    }
  }
  if (keys[37]){
    // Left Arrow toets
    if (player.MovementX > -player.speed){
      player.MovementX--
    }
  }
  player.MovementX = player.MovementX * friction;

  player.MovementY = player.MovementY + gravity;
  
  player.x = player.x + player.MovementX;
  player.y = player.y + player.MovementY;
  
  if(player.x >= width - player.width){
    player.x = width-player.width;
  }
  else if(player.x <= 0){
    player.x = 0;
  }

  if(player.y >= height - player.height){
    player.y = height - player.height;
    player.jumping = false;
  }

  // De speler
  context.clearRect(0, 0, width, height);
  context.fillStyle = "black";
  context.beginPath();

  for(var i = 0; i < boxes.length; i++){
    context.fillRect(boxes[i].x, boxes[i].y, boxes[i].width, boxes[i].height);
  }
  context.fill();
  context.fillStyle = "red";
  context.fillRect(player.x, player.y, player.width, player.height);
}

function CollisionChecker(ShapeA, ShapeB){
  //Krijgt de positie van het midden van de speler
  var playerX = (ShapeA.x + (ShapeA.width / 2)) - (ShapeB.x + (ShapeB.width / 2)),
      playerY = (ShapeA.y + (ShapeA.height / 2)) - (ShapeB.y + (ShapeB.height / 2)),
      //Voeg de half witdhs en half heights van de objecten toe
      hWidths = (ShapeA.width / 2) + (ShapeB.width / 2),
      hHeights = (ShapeA.height / 2) + (ShapeB.height / 2),
      colDir = null;

  // if the x and y vector are less than the half width or half height, they we must be inside the object, causing a collision If playerX en PlayerY minder dan de half width of half height zijn, dan moeten die in het object zijn. Hierdoor komt er een collision
  if (Math.abs(playerX) < hWidths && Math.abs(playerY) < hHeights) {  // berekent vanuit welke kant de collision plaatsvind (top, bottom, left, or right)         
    var objectX = hWidths - Math.abs(playerX),             
        objectY = hHeights - Math.abs(playerY);         
    if (objectX >= objectY) {
      if(playerY > 0){
        colDir = "t";
        ShapeA.y = ShapeA.y + objectY;
      }
      else{
        colDir = "b";
        ShapeA.y = ShapeA.y - objectY;
      }
    }
    else{
      if(playerX > 0){
        colDir = "l";
        ShapeA.x = ShapeA.x + objectX;
      }
      else{
        colDir = "r";
        ShapeA.x = ShapeA.x - objectX;
      }
    }
  }
  return colDir;
}

document.body.addEventListener("keydown", function(e){
  keys[e.keyCode] = true;
});
document.body.addEventListener("keyup", function(e){
  keys[e.keyCode] = false;
});

intervalID = setInterval(update, 1000 / gameFPS);