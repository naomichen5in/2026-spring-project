const button = document.getElementById("clean");
const graffiti = document.getElementById("my-graffiti");
const context = graffiti.getContext("2d");

// Graffiti style.
context.strokeStyle = "red";
context.lineWidth = "13";
context.lineJoin = "round";

let isDrawing = false;
let oldX = 0;
let oldY = 0;

function draw(event) {
  newX = event.offsetX;
  newY = event.offsetY;

  if (isDrawing) {
    context.beginPath();
    context.moveTo(oldX, oldY);
    context.lineTo(newX, newY);
    context.closePath();
    context.stroke();
  // } else {
  //   isDrawing = true;
  }

  oldX = newX;
  oldY = newY;
}

function startDrawing(event) {
  isDrawing = true;
}
function stopDrawing(event) {
  isDrawing = false;
}

graffiti.addEventListener("mousemove", draw);
graffiti.addEventListener('mousedown', startDrawing);
graffiti.addEventListener('mouseup', stopDrawing);

/*
 * Clean up
 */
function cleanCanvas() {
  context.clearRect(0, 0, context.canvas.width, context.canvas.height);
}
button.addEventListener("click", cleanCanvas);
