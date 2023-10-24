// Variables
const reset = document.getElementById('reset');
const magic = document.getElementById('magic');
const screen = document.getElementById('screen');

let coordinate = 20;
let squareColor = "rgb(0,0,0)";

// Etch-a-sketch grid
const easFrame = document.getElementById('eas-frame');
const easGrid = document.getElementById('eas-grid');
const gridRows = document.createElement('div');
gridRows.classList.add("gridRows");
easGrid.appendChild(gridRows);

function createGrid () {
    while (gridRows.firstChild) {
        gridRows.removeChild(gridRows.lastChild);
      }
      let columnWidth = String(600/coordinate + "px");
// for loop to create gridRows---HORIZONTAL
    for (let i = 0; i < coordinate; i++) {
        
        let column = document.createElement('div');
        column.classList.add('column');
        column.classList.add(`column${i}`);
        column.style.width = columnWidth;
        gridRows.appendChild(column);
    };

// for loop to create cells in each gridRows row---VERTICAL
    for (let i = 0; i < coordinate; i++) {

        let currentColumn = document.querySelector(`.column${i}`);

        for (let i = 0; i < coordinate; i++) {

            let cellHeight = String(440/coordinate + "px");
            let cell = document.createElement('div');
            cell.classList.add('cell');
            cell.classList.add(`cell${i}`);
            cell.style.height = cellHeight;
            cell.style.width = columnWidth;
            currentColumn.appendChild(cell);

        }

    };
    
    let gridCells = document.getElementsByClassName('cell');
    let gridSquares = Array.from(gridCells);

    gridSquares.forEach(square => {
        square.addEventListener('mouseover', function (square) {
            square.stopImmediatePropagation();
            square.target.style.backgroundColor = squareColor;
        });
    });
    return [gridSquares,gridCells];
};

[gridSquares,gridCells] = createGrid();

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
    squareColor = String("rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) +")");
});

screen.addEventListener('click', function() {
    coordinate = parseInt(prompt("How many pixels per side would you like the drawing surface?"));
    while (coordinate <= 0 || coordinate > 100) {
        coordinate = parseInt(prompt("Hint: the number must be greater than 0 and no more than 100. How many pixels per side would you like the drawing surface?"));
    }
    [gridSquares,gridCells] = createGrid();
});