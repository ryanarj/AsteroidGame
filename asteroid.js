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

function moveUp(){
    shipY -= 20;
}

var asteroids = [];
asteroids[0] = {
    x: cvs.width,
    y : 0
}

function draw(){
    ctx.drawImage(bg, 0, 0);

    for(var i = 0; i < asteroids.length; i++){
        ctx.drawImage(asteroidNorth, asteroids[i].x, asteroids[i].y);
        ctx.drawImage(asteroidSouth, asteroids[i].x, asteroids[i].y+constant);
        asteroids[i].x--;
        if(asteroids[i].x == 0){
            asteroids.push({
                x: cvs.width,
                y: Math.floor(math.random()*asteroidNorth.height) - asteroidNorth.height
            });
        }
        if( shipX + ship.width >= asteroids[i].x && shipX <= asteroids[i].x + asteroidNorth.width
            && (shipY >= asteroids[i].y +  asteroidNorth.height || 
                shipY+asteroidNorth.height >= asteroids[i].y+constant)){
                    location.reload();
            }
        ctx.drawImage(ship, shipX, shipY);
    }
    shipX += fall;
    requestAnimationFrame(draw, shipX, shipY);
}


draw();