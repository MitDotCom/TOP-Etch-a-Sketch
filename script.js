// Buttons
const magic = document.querySelector('.magic');
const screen = document.querySelector('.screen');
const resetButton = document.getElementById('reset');

// Etch-a-sketch grid
const easFrame = document.getElementById('eas-frame');
const easGrid = document.getElementById('eas-grid');
const gridNodes = document.getElementsByClassName('cell');
const gridSquares = Array.from(gridNodes);

const gridRows = document.createElement('div');
gridRows.classList.add("gridRows");
easGrid.appendChild(gridRows);

// for loop to create gridRows
for (let i = 0; i < 22; i++) {
    
    let column = document.createElement('div');
    column.classList.add(`column${i}`);
    gridRows.appendChild(column);
};

// for loop to create cells in each gridRows row
for (let i = 0; i < 22; i++) {

    let currentColumn = document.querySelector(`.column${i}`);

    for (let i = 0; i < 16; i++) {

        let cell = document.createElement('div');
        cell.classList.add('cell');
        cell.classList.add(`cell${i}`);
        currentColumn.appendChild(cell);
    }

};

gridSquares.forEach(square => {
    square.addEventListener('mouseover', (square) => {
        square.target.style.backgroundColor = 'black';
    })
});

resetButton.addEventListener('click', () => {
    gridSquares.forEach(square => {
        square.style.backgroundColor = 'white';
    })
})