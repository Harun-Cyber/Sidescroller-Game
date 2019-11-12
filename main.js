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
      MovementY : 0
    },
    keys = [];
 
canvas.width = width;
canvas.height = height;
 
function update(){
  // De toetsen
  if (keys[38]){
    // Up Arrow toets
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

  player.x += player.MovementX;
  player.y += player.MovementY;

  if(player.x >= width-player.width){
    player.x = width-player.width;
  }
  else if(player.x <= 0){
    player.x = 0;
  }

  // De speler
  context.fillStyle = "red";
  context.fillRect(player.x, player.y, player.width, player.height);
}

document.body.addEventListener("keydown", function(e){
  keys[e.keyCode] = true;
});
document.body.addEventListener("keyup", function(e){
  keys[e.keyCode] = false;
});

intervalID = setInterval(update, 1000 / gameFPS);