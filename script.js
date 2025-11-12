const squareContainer = document.querySelector('.container');

for(let i=0; i<16; i++){
    let square = document.createElement('div');
    square.classList.add('square');
    squareContainer.appendChild(square);
}