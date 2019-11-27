const canvas = document.getElementById("snake"); //De vorm van de Canvas
var context = canvas.getContext("2d");
const width = 500;
const height = 500;
var snake = {
    x: width / 2,
    y: height - 5,
    snakeSize = 10,
    movementX = 0,
    movementY = 0,
    speed = 3
};

canvas.height = height;
canvas.width = width;
