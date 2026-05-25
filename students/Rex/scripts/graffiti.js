/*
*HTML elements
*/
const graffitiCanvas = document.getElementById("my-graffiti");
const surface = graffitiCanvas.getContext("2d");
const cleanbutton = document.getElementById("clean");


/*
graffiti style
*/

surface.lineWidth = 13;
surface.lineJoin = "round";
surface.strokeStyle = "red";

/*
*shape
*/

function shape(){
surface.rect(100, 200, 100, 100);
surface.stroke();

surface.beginPath();
surface.moveTo(150,50);
surface.lineTo(100,200);
surface.closePath();
surface.stroke();

surface.beginPath();
surface.moveTo(225,50);
surface.lineTo(230,150);
surface.moveTo(220,50);
surface.lineTo(325,50);
surface.moveTo(325,50);
surface.lineTo(310,300);
surface.closePath();
surface.stroke();

};
shape();

function cleanCanvas(){
    surface.clearRect(0, 0, 400, 400);
};
cleanbutton.addEventListener("click", cleanCanvas);