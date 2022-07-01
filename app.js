// grabbing the grid from html
const grid = document.querySelector('.grid');
const score = document.querySelector('#score')
const blockWidth = 100
const blockHeight = 20
const ballDiameter = 20
const boardWidth = 560 
const boardHeight = 300
//set a timerID for ball
let timerId
// set variables for xDirection and yDirection thast we can use later to relate to how fast the balls will move in either direction
let xDirection = 2
let yDirection = 2


//want to make user start in the same xAxis as the middle block. wil always "start" here even if you refresh.
const userStart = [230, 10]
// Declare currentPosition here and define it as userStart (it's ok since it's a let it can change)
let currentPosition = userStart

// set up positioning for the ball, want it to sit right on top of the user start position.
const ballStart =[270, 40]
let ballCurrentPosition = ballStart 



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
// run drawUser function.
drawUser()
// append to the child element.
grid.appendChild(user);

// Draw the user
function drawUser() {
    // both of these will print based on Currents position array.
    user.style.left = currentPosition[0] + 'px'
    user.style.bottom = currentPosition[1] + 'px'
}

// Draw the ball
function drawBall() {
       // both of these will print based on Currents position array.
       ball.style.left = ballCurrentPosition[0] + 'px'
       ball.style.bottom = ballCurrentPosition[1] + 'px'
   }

// Move user.

function moveUser(e) {
    // will use a switch case because we are going to be listening out for different keys.
    // pass through what to listen for and if it matches the case we will execute the code and breakout.
    switch(e.key) {
        // if the key pressed has the value of ArrowLeft then...
        case 'ArrowLeft':
            // add an if statement so that the xAxis will never go past the border of the grid (will never be less than 0)
            if (currentPosition[0] > 0) {
        // subtract ten from xAxis on keypress.
        currentPosition[0] -=10
        // redraw the user.
        drawUser()
            }
        break;
        // second switch case
        case 'ArrowRight':
            // as long as the x axis doesn't extend past boardWidth (need to subtract the block width to account for anchor point.)
            if (currentPosition[0] < boardWidth - blockWidth) {
                // Ad 10 to the xAxis on keydown
            currentPosition[0] +=10
            // redraw the user.
            drawUser()
            }
            break;
    }
}
// listen out for a keydown and callback moveUser function
document.addEventListener('keydown', moveUser)

// add the ball

const ball = document.createElement('div');
ball.classList.add('ball')
drawBall()
// the grid is the parent and we are putting the ball inside of it.
grid.appendChild(ball)

// Move the ball
function moveBall() {
   
    // want our ball to move by adding x and y axis
    ballCurrentPosition[0] += xDirection
    ballCurrentPosition[1] += yDirection
    drawBall()
    checkForCollisions()
}

// set interval for moveBall and put on timerId clear interval if needed
timerId = setInterval(moveBall, 30)

//check for collisions
function checkForCollisions() { 
    // check if ball collides with wall
    if(ballCurrentPosition[0] >= (boardWidth - ballDiameter) || 
    ballCurrentPosition[1] >= (boardHeight - ballDiameter) ||
    // If x axis is smaller than or equal to zero than run changeDirection
    ballCurrentPosition[0] <= 0 ) {
        changeDirection()
    }

    // check for game over
    // If ball hits bottom of the board clear interval(stop ball from moving)
    if (ballCurrentPosition[1] <= 0) {
        clearInterval(timerId)
        // once the ball hits the bottom set score to "you lose"
        score.innerHTML = 'You Lose'
        // remove event listener of keydown so we can't move the user
        document.removeEventListener('keydown', moveUser)
        grid.classList.remove('grid')
        grid.classList.add('none')
        score.classList.add('gameover')
    }
}

function changeDirection() { 
    // currently our ball is moving +2 x and y +2 so..

    // If xDirection is and yDirection on collision = 2
    // Trying to set a bunch of rules for the collision detection on the x and y axis ... redefining values as needed.
    if (xDirection === 2 && yDirection === 2) {
    yDirection = -2
    return
    } 
    if (xDirection === 2 && yDirection === -2) {
        xDirection = -2
        return
    }
    if (xDirection === -2 && yDirection === -2) {
        yDirection = 2
        return
    }
    if (xDirection === -2 && yDirection === 2) {
        xDirection = 2
        return
    }
    else {
        return
    }
}