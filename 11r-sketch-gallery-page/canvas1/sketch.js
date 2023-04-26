let r, g, b;
let x;
let y;
let sx = 2;
let sy = 3;
let w = 20;
let h = 20;
let a = 1;

function setup() {
  let canvas = createCanvas(400, 400);
  canvas.parent("canvasContainer1");
  background(100);
  x = width / 2;
  y = height / 2;
  fill(100);
  noStroke();
  rect(x, y, w, h);
}

function draw() {
  rectMode(CENTER);
  noStroke();
  rect(x, y, w, h);
  //bouncing
  if (x > width - 10 || x < 10) {
    sx = -sx;
  }
  if (y > height - 10 || y < 10) {
    sy = -sy;
  }
  //updating the position
  x = x + sx;
  y = y + sy;
  //change the size of the shape
  if (keyIsPressed) {
    if (key == "b") {
      w = w + a;
      h = h + a;
    } else if (key == "s") {
      w = w - a;
      h = h - a;
    }
  }
  //the color
  if (mouseIsPressed === true) {
    r = 127;
    g = 0;
    b = 255;
    fill(r, g, b);
  }
  //change color
  if (keyIsPressed) {
    if (key == "g" || key == "G") {
      r = 0;
      g = 255;
      b = 0;
      fill(r, g, b);
      rect(x, y, w, h);
    }
  }
}

