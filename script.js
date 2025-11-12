const squareContainer = document.querySelector('.container');
const squareNumber = 16;



for(let i=0; i<squareNumber; i++){
    for(let j=0; j<squareNumber; j++){
        let square = document.createElement('div');
        square.classList.add('square');
        squareContainer.appendChild(square);
    }

}