// Etch-a-sketch grid
easFrame = document.getElementById('eas-frame');
easGrid = document.getElementById('eas-grid');

const gridRows = document.createElement('div');
gridRows.classList.add("gridRows");
easGrid.appendChild(gridRows);

for (let i = 0; i <= 16; i++) {
    
    let column = document.createElement('div');
    column.classList.add(`${i}`);
    gridRows.appendChild(column);
};

