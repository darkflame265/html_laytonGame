var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');
var isDrawing = false;
var lastX = 0;
var lastY = 0;

canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', stopDrawing);
canvas.addEventListener('mouseout', stopDrawing);

//교재 p.505 참조.

function startDrawing(event) {
    isDrawing = true;
    [lastX, lastY] = [event.offsetX, event.offsetY];
}

function draw(event) {
    if (!isDrawing) return;
    context.beginPath();
    context.moveTo(lastX, lastY);
    context.lineTo(event.offsetX, event.offsetY);
    context.stroke();
    [lastX, lastY] = [event.offsetX, event.offsetY];
}

function stopDrawing() {
    isDrawing = false;
}

function erase_all() {
    context.clearRect(0, 0, canvas.width, canvas.height);
}