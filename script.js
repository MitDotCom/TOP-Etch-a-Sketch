// Variables
const reset = document.getElementById('reset');
const magic = document.getElementById('magic');
const screen = document.getElementById('screen');

let coordinate = 20;

// Etch-a-sketch grid
const easFrame = document.getElementById('eas-frame');
const easGrid = document.getElementById('eas-grid');
const gridRows = document.createElement('div');

gridRows.classList.add("gridRows");
easGrid.appendChild(gridRows);

function createGrid () {

// for loop to create gridRows
    for (let i = 0; i < coordinate; i++) {
        
        let column = document.createElement('div');
        column.classList.add(`column${i}`);
        gridRows.appendChild(column);
    };

// for loop to create cells in each gridRows row
    for (let i = 0; i < coordinate; i++) {

        let currentColumn = document.querySelector(`.column${i}`);

        for (let i = 0; i < coordinate * 0.666; i++) {

            let cell = document.createElement('div');
            cell.classList.add('cell');
            cell.classList.add(`cell${i}`);
            currentColumn.appendChild(cell);
        }

    };

let gridNodes = document.getElementsByClassName('cell');
let gridSquares = Array.from(gridNodes);

    gridSquares.forEach(square => {
        square.addEventListener('mouseover', (square) => {
            square.target.style.backgroundColor = "black";
        })
    });
    return [gridSquares,gridNodes];
};

[gridSquares,gridNodes] = createGrid();

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
    coordinate = parseInt(prompt("How many pixels per side would you like the drawing surface?"));
    while (coordinate <= 0 || coordinate > 100) {
        coordinate = parseInt(prompt("Hint: the number must be greater than 0 and less than 100. How many pixels per side would you like the drawing surface?"));
    }
    console.log("coordinate: ",coordinate,"typeof: ",typeof coordinate);
    [gridSquares,gridNodes] = createGrid();
});