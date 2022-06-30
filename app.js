// grabbing the grid from html
const grid = document.querySelector('.grid');
const blockWidth = 100
const blockHeight = 20

//want to make user start in the same xAxis as the middle block. wil always "start" here even if you refresh.
const userStart = [230, 10]
// Declare currentPosition here and define it as userStart (it's ok since it's a let it can change)
let currentPosition = userStart
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

    // create an array of all my blocks. 
    const blocks = [
        // setting the x and y coordinates in relation to the constructor above.
        new Block(10, 270),
        new Block(120, 270),
        new Block(230, 270),
        new Block(340, 270),
        new Block(450, 270),
        
        new Block(10, 240),
        new Block(120, 240),
        new Block(230, 240),
        new Block(340, 240),
        new Block(450, 240),
        
        new Block(10, 210),
        new Block(120, 210),
        new Block(230, 210),
        new Block(340, 210),
        new Block(450, 210),
        
    ]

    // console log to make sure it's running properly should grab all four points that create the block. 
    // console.log(blocks[0])




// function to draw the block, will have to repeat to draw other blocks.
// function addBlock() {

    // create the first block div and add a class of block to it
    // const block= document.createElement('div');
    // block.classList.add('block');
    // adding the left and the bottom styles and spacing to the css in javascript
    // block.style.left = '100px'
    // block.style.bottom = '50px'
    // Add the element to a child of grid.
    // grid.appendChild(block);

// }
// same as the single block function more or less but plural for multiple blocks.
function addBlocks() {
    // for loop to create all the blocks I need to draw based on the array above.
    for (let i = 0; i < blocks.length; i++) {

         // create the first block div and add a class of block to it
        const block= document.createElement('div');
        block.classList.add('block');
        // adding the left and the bottom styles and spacing to the css in javascript
        // grab the bottomLeft xAxis from the constructor above using [0]  to refer to xAxis that we set up in this.bottomLeft.
        block.style.left = blocks[i].bottomLeft[0] + 'px'
        block.style.bottom = blocks[i].bottomLeft[1] + 'px'
        // Add the element to a child of grid.
        grid.appendChild(block);
        
      
    }
     // A way to automate the x coordinates need to figure out how to run it in increments of 5 and then start over..
//  if( i < blocks.length ) {
//     block.style.left = blocks[i].bottomLeft[0] + 110 * i + 'px'
//     block.style.bottom = blocks[i].bottomLeft[1] + 'px'

// }
// console.log(blocks[i].bottomLeft[0] + 110 * i);
 
}

addBlocks()

//add a user
// create the user container
const user = document.createElement('div');
// add the class of user to create the styles
user.classList.add('user');
// both of these will print based on Currents position array.
user.style.left = currentPosition[0] + 'px'
user.style.bottom = currentPosition[1] + 'px'
// append to the child element.
grid.appendChild(user);