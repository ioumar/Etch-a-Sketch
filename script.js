const NUMBER_OF_SQUARE = 16;
const GRID_WIDTH = 500;
const squareContainer = document.querySelector('.container');

squareContainer.style.width = `${GRID_WIDTH}px`;
squareContainer.style.height = `${GRID_WIDTH}px`;

function createGrid(squareNumber){
    let squares = Math.pow(squareNumber,2);
    for(let i=0; i<squares; i++){
        let square = document.createElement('div')
        square.classList.add('square');
        square.style.width = `${GRID_WIDTH/NUMBER_OF_SQUARE}px`;
        square.style.height = `${GRID_WIDTH/NUMBER_OF_SQUARE}px`;
        squareContainer.appendChild(square);
    }
        
};

createGrid(NUMBER_OF_SQUARE);
