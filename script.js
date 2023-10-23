// Variables
const reset = document.getElementById('reset');
const magic = document.getElementById('magic');
const screen = document.getElementById('screen');
// Etch-a-sketch grid
const easFrame = document.getElementById('eas-frame');
const easGrid = document.getElementById('eas-grid');
const gridRows = document.createElement('div');

gridRows.classList.add("gridRows");
easGrid.appendChild(gridRows);

// for loop to create gridRows
for (let i = 0; i < 24; i++) {
    
    let column = document.createElement('div');
    column.classList.add(`column${i}`);
    gridRows.appendChild(column);
};

// for loop to create cells in each gridRows row
for (let i = 0; i < 24; i++) {

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

gridSquares.forEach(square => {
    square.addEventListener('mouseover', (square) => {
        square.target.style.backgroundColor = "black";
    })
});

reset.addEventListener('click', () => {
    gridSquares.forEach(square => {
        square.style.backgroundColor = 'white';
    })
    easFrame.classList.add('shake');
    setTimeout(function () {
        easFrame.classList.remove('shake');
    }, 500)
    
});

magic.addEventListener('click', function () {

});

screen.addEventListener('click', function() {

});