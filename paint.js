const canvas = document.getElementById('myCanvas');
const context = canvas.getContext('2d');
let drawingPointer = null;
function point(event) {
  const bounds = canvas.getBoundingClientRect();
  return { x: (event.clientX - bounds.left) * canvas.width / bounds.width,
    y: (event.clientY - bounds.top) * canvas.height / bounds.height };
}
canvas.addEventListener('pointerdown', event => {
  if (!event.isPrimary || event.button !== 0) return;
  drawingPointer = event.pointerId;
  canvas.setPointerCapture(event.pointerId);
  const { x, y } = point(event);
  context.strokeStyle = '#34291f';context.lineWidth = 2.5;
  context.lineCap = 'round';context.lineJoin = 'round';
  context.beginPath();context.moveTo(x, y);
});
canvas.addEventListener('pointermove', event => {
  if (drawingPointer !== event.pointerId) return;
  const { x, y } = point(event);context.lineTo(x, y);context.stroke();
});
function stopDrawing(event) {
  if (drawingPointer !== event.pointerId) return;
  drawingPointer = null;context.closePath();
}
canvas.addEventListener('pointerup', stopDrawing);
canvas.addEventListener('pointercancel', stopDrawing);
canvas.addEventListener('lostpointercapture', stopDrawing);
function erase_all() { context.clearRect(0, 0, canvas.width, canvas.height); }
