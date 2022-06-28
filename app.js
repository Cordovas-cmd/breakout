// grabbing the grid from html
const grid = document.querySelector('.grid');


// create the first block div and add a class of block to it
const block= document.createElement('div');
block.classList.add('block');
// Add the element to a child of grid.
grid.appendChild(block);