// Etch-a-sketch grid
easFrame = document.getElementById('eas-frame');
easGrid = document.getElementById('eas-grid');

const gridRows = document.createElement('div');
gridRows.classList.add("gridRows");
easGrid.appendChild(gridRows);

// for loop to create gridRows
for (let i = 0; i < 16; i++) {
    
    let column = document.createElement('div');
    column.classList.add(`column${i}`);
    gridRows.appendChild(column);
};

// for loop to create cells in each gridRows row
for (let i = 0; i < 16; i++) {

    let currentColumn = document.querySelector(`.column${i}`);

    for (let i = 0; i < 16; i++) {

        let cell = document.createElement('div');
        cell.classList.add(`cell${i}`);
        console.log(cell);
        currentColumn.appendChild(cell);
    }

};