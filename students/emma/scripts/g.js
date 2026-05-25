/*
*HTML element
*/
const gCanvas = document.getElementById("graffiti");
const surface = gCanvas.getContext("2d");
const cbutton = document.getElementById("clean");

surface.lineWidth = 13;
surface.lineJoin = "round";
surface.strokeStyle = "gray"
/*
*shapes
*/
function shapes(){
    surface.rect(150, 200, 100, 100);
    surface.stroke();

    surface.beginPath();
    surface.moveTo(200, 50);
    surface.lineTo(150, 200);
    //add 7
    surface.moveTo(250, 50);
    surface.lineTo(350, 50);
    surface.moveTo(350, 50);
    surface.lineTo(270, 300);
    surface.closePath();
    surface.stroke();
}
shapes();

function cCanvas(){
    surface.clearRect(0, 0, 400, 400);
    console.log("clean");
}
cbutton.addEventListener("click", cCanvas);