var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");

var ship = new Image();
var bg = new Image();
var asteroidNorth = new Image();
var asteroidSouth = new Image();

ship.src = "images/ship.png";
bg.src = "images/spaceBG.png";
asteroidNorth.src = "images/asteroid.png";
asteroidSouth.src = "images/asteroid.png";

var gap = 300;
var constant = asteroidNorth.height+gap;

var shipX = 10;
var shipY = 150;
var fall = 1;

document.addEventListener("keydown", moveUp);

var asteroids = [];
asteroids[0] = {
    x: cvs.width,
    y : 0
}

function moveUp(){
    shipY -= 20;
}

function draw(){
    ctx.drawImage(bg, 0, 0);

    for(var i = 0; i < asteroids.length; i++){
        ctx.drawImage(asteroidNorth, asteroids[i].x, asteroids[i].y);
        ctx.drawImage(asteroidNorth, asteroids[i].x, asteroids[i].y+constant);
    }

    ctx.drawImage(ship, 10, 150);
    shipX += fall;
    requestAnimationFrame(draw, shipX, shipY);
}


draw();