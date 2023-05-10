let mic, fft;
let prevX, prevY;
let lineWidth = 10;

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent(canvasContainer);
  strokeWeight(4);
  line(97, 70, 97, height-135);
  line(width-100, 70, width-100, height-135);
  line(400, 35, width-420, 35);
  mic = new p5.AudioIn();
  mic.start();
  fft = new p5.FFT();
  fft.setInput(mic);
  strokeWeight(lineWidth);
  stroke(random(255), random(255), random(255));
}

function draw() {
  // background(255);
  let spectrum = fft.analyze();
  let pitch = map(mouseY, 0, height, 100, 2000);
  let wave = map(lineWidth, 1, 30, 0.1, 1);
  let vol = mic.getLevel() * wave;
  stroke(random(255), random(255), random(255));
  if (mouseIsPressed) {
    line(prevX, prevY, mouseX, mouseY);
    prevX = mouseX;
    prevY = mouseY;
    let osc = new p5.Oscillator(pitch, 'sine');
    osc.amp(vol);
    osc.start();
    osc.stop(0.05);
  } else {
    prevX = mouseX;
    prevY = mouseY;
  }
  // lineWidth = map(mouseWheelDelta, -200, 200, 1, 30);
  strokeWeight(lineWidth);
}

function mouseWheel(event) {
  // print(event.delta);
  //move the square according to the vertical scroll amount
  // pos += event.delta;
  //uncomment to block page scrolling
  //return false;
  lineWidth = map(event.delta, -200, 200, 1, 30);
}
