
function writeData() {
    var parent = document.createElement('div');
    parent.id = 'grid';

    for (var i = 0; i < 10; i++) {
        for (var j = 0; j < 10; j++) {
            var child = document.createElement('div');
            parent.appendChild(child);
        }
    }

    document.body.appendChild(parent);
}

///////////////////////////

writeData();