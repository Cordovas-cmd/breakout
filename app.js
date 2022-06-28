// grabbing the grid from html
const grid = document.querySelector('.grid');
const blockWidth = 100
const blockHeight = 20

// create block
class Block {
    // using the X and Y axis (bottom left of our block) using to decipher all 4 points of the block
    constructor(xAxis, yAxis) {
        // referring back to the bottomLeft using x and yAxis
        this.bottomLeft = [xAxis, yAxis]
        // to get the bottom right we add block width to xAxis
        this.bottomRight = [xAxis + blockWidth, yAxis]
        //  to get top left we add block height along the y axis
        this.topLeft = [xAxis, yAxis + blockHeight]
        //  to get the top right we add block width along the x axis and add blockHeight to yAxis
        this.topRight = [xAxis + blockWidth, yAxis + blockHeight]
    }

}

// function to draw the block, will have to repeat to draw other blocks.
function addBlock() {

    // create the first block div and add a class of block to it
    const block= document.createElement('div');
    block.classList.add('block');
    // adding the left and the bottom styles and spacing to the css in javascript
    block.style.left = '100px'
    block.style.bottom = '50px'
    // Add the element to a child of grid.
    grid.appendChild(block);

}

addBlock()