let mic, fft, hueHue, saturationSaturation;
let colorValue = 0;

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("canvasContainer"); 

  textFont("Bruno Ace");

  strokeWeight(4);
  line(97, 70, 97, height-135);
  line(width-100, 70, width-100, height-135);
  line(480, 35, width-500, 35);
  // line(400, height-95, width-420, height-95);
  // stroke(0);
  mic = new p5.AudioIn();
  mic.start();
  fft = new p5.FFT();
  fft.setInput(mic);
  mouseClicked = function() {
    hueHue = random(100);
    saturationSaturation = random(100);
  }  
}

function draw() {
  // background(255);

  let level = mic.getLevel();
  let spectrum = fft.analyze();
  let peakFrequency = findPeakFreq(spectrum);
  let weight = map(level, 0, 1, 1, 25);
  let colorValue = map(peakFrequency, 0, 1000, 0, 255);
  colorMode(HSB, 100);
  strokeWeight(weight);
  stroke(hueHue, saturationSaturation, colorValue);
  line(width/2, height/2, width/2 + random(-level*800, level*800), height/2 + random(-level*800, level*800));
}

function findPeakFreq(spectrum) {
  let peakIndex = 0;
  for (let i = 1; i < spectrum.length; i++) {
    if (spectrum[i] > spectrum[peakIndex]) {
      peakIndex = i;
    }
  }
  let peakFreq = map(peakIndex, 0, spectrum.length, 0, 22050);
  return peakFreq;
}

function keyPressed() {
  if (keyCode === 32) {
    saveCanvas('myCanvas', 'png');
  }
}