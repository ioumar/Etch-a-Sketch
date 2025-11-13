const GRID_WIDTH = 500;
let numberOfSquare = 16;
const squareContainer = document.querySelector('.container');
const resetButton = document.querySelector('.reset-button');

squareContainer.style.width = `${GRID_WIDTH}px`;
squareContainer.style.height = `${GRID_WIDTH}px`;


function createGrid(squareNumber){

    let squares = Math.pow(squareNumber,2);

    for(let i=0; i<squares; i++){
        let square = document.createElement('div')
        square.classList.add('square');
        square.style.width = `${GRID_WIDTH/squareNumber}px`;
        square.style.height = `${GRID_WIDTH/squareNumber}px`;
        squareContainer.appendChild(square);
        
        
        square.addEventListener('mouseover', () =>{
            square.style.backgroundColor = "black";
        });
    }
    
    
};

createGrid(numberOfSquare);

resetButton.addEventListener('click',()=>{
    
    numberOfSquare = Number(prompt("Entrer le nombre de carré par côté : "));
    
    if(numberOfSquare < 1 || numberOfSquare > 100){
        numberOfSquare = 16;
    }

    squareContainer.innerHTML = '';
    createGrid(numberOfSquare);
});
