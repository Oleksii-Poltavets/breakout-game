const grid = document.querySelector('.grid');
const blockWidth = 100;
const blockHeight = 20;

const userStart = [230, 10];
let currentUserPosition = userStart;
const ballStart = [270, 40];
let currentBallPosition = ballStart;

//create a block
class Block {
    constructor(xAxis, yAxis) {
        this.bottomLeft = [xAxis, yAxis];
        this.bottomRight = [xAxis + blockWidth, yAxis];
        this.topLeft = [xAxis, yAxis + blockHeight];
        this.topRight = [xAxis + blockWidth, yAxis + blockHeight];
    }
}

//array of blocks
const blocks = [
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

//draw a block
function createBlock() {
    for(let i = 0; i < blocks.length; i++) {
        const block = document.createElement('div');
        block.classList.add('block');
        block.style.left = blocks[i].bottomLeft[0] + 'px';
        block.style.bottom = blocks[i].bottomLeft[1] + 'px';
        grid.appendChild(block);
    }
}
createBlock();

//create a user
const user = document.createElement('div');
user.classList.add('user');
drawUser();
grid.appendChild(user);

//draw a user
function drawUser() {
    user.style.left = currentUserPosition[0] + 'px';
    user.style.bottom = currentUserPosition[1] + 'px';
}

//move user
function moveUser(e) {
    switch(e.key) {
        case 'ArrowLeft':
            if(currentUserPosition[0] > 0) {
                currentUserPosition[0] -= 10;
                drawUser();
                break;
            } else {
                currentUserPosition[0] = 0;
                drawUser();
                break;
            }
        case 'ArrowRight':
            if(currentUserPosition[0] < (560 - blockWidth)) {
                currentUserPosition[0] += 10;
                drawUser();
                break;
            }
        default:
            break;
    }
}

document.addEventListener('keydown', moveUser);

//create a ball
const ball = document.createElement('div');
ball.classList.add('ball');
drawBall();
grid.appendChild(ball);

//draw a ball
function drawBall() {
    ball.style.left = currentBallPosition[0] + 'px';
    ball.style.bottom = currentBallPosition[1] + 'px';
}

//move a ball
function moveBall() {
    currentBallPosition[0] += 1;
    currentBallPosition[1] += 1;
    drawBall();
}
// setInterval(moveBall, 15);
