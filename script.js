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
        cell.classList.add('cell');
        cell.classList.add(`cell${i}`);
        currentColumn.appendChild(cell);
    }

};
const gridNodes = document.getElementsByClassName('cell');
const gridSquares = Array.from(gridNodes);

console.log(typeof gridSquares, gridSquares.length);

gridSquares.forEach(square => {
    square.addEventListener('mouseover', (square) => {
        console.log(square);
        square.target.style.backgroundColor = 'red';
    })
});