
var dirX = 1, dirY = 0;
var score = 0;

//////////////////////////

function writeData() {
    var parent = document.createElement('div');
    parent.id = 'grid';

    for (var i = 0; i < 10; i++) {
        for (var j = 0; j < 10; j++) {
            var child = document.createElement('div');
            parent.appendChild(child);
        }
    }

    var snake = document.createElement('div');
    snake.id = 'snake';
    snake.style.margin = '0px';
    parent.appendChild(snake);

    document.body.appendChild(parent);
}

function writeFruit() {
    var parent = document.getElementById('grid');
    var fruit = document.createElement('div');
    fruit.id = 'fruit';

    var posX = Math.floor(Math.random() * 10) * 51;
    var posY = Math.floor(Math.random() * 10) * 51;

    fruit.style.margin = posY.toString() + 'px 0 0 ' + posX.toString() + 'px'; 
    parent.appendChild(fruit);
}

function getNewPosition(pos, topLeft) {
    var newPos = parseInt(pos.substring(0, pos.length - 2));
    if (newPos < 450 && topLeft) {
        newPos += 51;
    } 
    if (newPos > 50 && !topLeft) {
        newPos -= 51;
    }
    return newPos.toString() + 'px';
}

function moveSnake() {
    var x = document.getElementById('snake');    

    if (dirY === 1) {
        x.style.marginTop = getNewPosition(x.style.marginTop, false);
    } else if (dirY === 2) {
        x.style.marginTop = getNewPosition(x.style.marginTop, true);
    } 
    if (dirX === 1) {
        x.style.marginLeft = getNewPosition(x.style.marginLeft, true);
    } else if (dirX === 2) {
        x.style.marginLeft = getNewPosition(x.style.marginLeft, false);
    } 
}

function resetFruitIfHit() {
    var snake = document.getElementById('snake');
    var fruit = document.getElementById('fruit');

    var marginSnake = snake.style.margin;
    var marginFruit = fruit.style.margin;

    if (marginSnake === marginFruit) {
        var posX = Math.floor(Math.random() * 10) * 51;
        var posY = Math.floor(Math.random() * 10) * 51;    
        fruit.style.margin = posY.toString() + 'px 0 0 ' + posX.toString() + 'px'; 
        score++;
    }
}

function addScore() {
    var scoreBoard = document.createElement('div');
    scoreBoard.id = 'scoreBoard';
    scoreBoard.style.marginLeft =  '500px';
    var p = document.createElement('p');
    p.innerHTML = 'Score: ' + score;
    scoreBoard.appendChild(p);
    document.body.appendChild(scoreBoard);
}

function renewScore() {
    var scoreBoard = document.getElementById('scoreBoard');
    var p = scoreBoard.childNodes[0];
    p.innerHTML = 'Score: ' + score;
}

///////////////////////////

writeData();
writeFruit();
addScore();

setInterval(function(){ 
        moveSnake();
        resetFruitIfHit();
        renewScore();
}, 100);

///////////////////////////

// Left: 37, Up: 38, Right: 39, Down: 40 
document.addEventListener('keydown', function(event) {
    if(event.keyCode == 37) {
        dirX = 2;
        dirY = 0;
    } else if(event.keyCode == 38) {
        dirY = 1;
        dirX = 0;
    } else if(event.keyCode == 39) {
        dirX = 1;
        dirY = 0;
    } else if(event.keyCode == 40) {
        dirY = 2;
        dirX = 0;
    }
});