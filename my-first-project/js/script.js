alert('Hello!');
function setup(){
    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent("canvasContainer");
    background(100);
}

function mouseClicked(){
noStroke();
fill(random(255), random(255), random(255));
let x=random(width);
let y=random(height);
circle(x, y, 50);
}