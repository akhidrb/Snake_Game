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

function writeFruit() {
    var parent = document.getElementById('grid');
    var fruit = document.createElement('div');
    fruit.id = 'fruit';

    var posX = Math.floor(Math.random() * 10) * 51;
    var posY = Math.floor(Math.random() * 10) * 51;

    fruit.style.margin = posY.toString() + 'px 0 0 ' + posX.toString() + 'px'; 
    parent.appendChild(fruit);
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
    }
}

///////////////////////////

writeData();
writeFruit();

// Left: 37, Up: 38, Right: 39, Down: 40 
document.addEventListener('keydown', function(event) {
    
    if(event.keyCode == 37) {
    
        var x = document.getElementById('snake');
        x.style.marginLeft = getNewPosition(x.style.marginLeft, false);
    
    } else if(event.keyCode == 38) {
        
        var x = document.getElementById('snake');
        x.style.marginTop = getNewPosition(x.style.marginTop, false);

    } else if(event.keyCode == 39) {
    
        var x = document.getElementById('snake');
        x.style.marginLeft = getNewPosition(x.style.marginLeft, true);
    
    } else if(event.keyCode == 40) {
    
        var x = document.getElementById('snake');
        x.style.marginTop = getNewPosition(x.style.marginTop, true);
    
    }
    resetFruitIfHit();
});
