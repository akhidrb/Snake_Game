
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

///////////////////////////

writeData();
writeFruit();