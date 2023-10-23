const snake = document.getElementById('snake');
const food = document.getElementById('food');

let snakeX = 2;
let snakeY = 2;
let foodX = 5;
let foodY = 5;

let direction = 'right';
let score = 0;

function update() {
    snakeX += direction === 'right' ? 1 : direction === 'left' ? -1 : 0;
    snakeY += direction === 'down' ? 1 : direction === 'up' ? -1 : 0;

    if (snakeX === foodX && snakeY === foodY) {
        score++;
        foodX = Math.floor(Math.random() * 20);
        foodY = Math.floor(Math.random() * 20);
    }

    snake.style.left = snakeX * 15 + 'px';
    snake.style.top = snakeY * 15 + 'px';

    food.style.left = foodX * 15 + 'px';
    food.style.top = foodY * 15 + 'px';
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowUp' && direction !== 'down') {
        direction = 'up';
    } else if (e.key === 'ArrowDown' && direction !== 'up') {
        direction = 'down';
    } else if (e.key === 'ArrowLeft' && direction !== 'right') {
        direction = 'left';
    } else if (e.key === 'ArrowRight' && direction !== 'left') {
        direction = 'right';
    }
});

setInterval(update, 100);
