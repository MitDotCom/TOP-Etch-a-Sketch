// Etch-a-sketch grid
easFrame = document.getElementById('eas-frame');
easGrid = document.getElementById('eas-grid');

const gridRows = document.createElement('div');
easGrid.appendChild(gridRows);
const gridColumns = document.createElement('div');
easGrid.appendChild(gridColumns);

for (i=0;i<20;i++) {
    let `cellC${i}` = document.createElement('div');
    gridColumns.appendChild(`cellC${i}`);
}

console.log(gridColumns);
