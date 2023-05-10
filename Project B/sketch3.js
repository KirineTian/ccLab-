let mic, fft, hueHue, saturationSaturation;
let colorValue = 0;

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("canvasContainer");
  background(255);
  stroke(0);
  mic = new p5.AudioIn();
  mic.start();
  fft = new p5.FFT();
  fft.setInput(mic);
  // mouseClicked = function() {
  //   hueHue = random(100);
  //   saturationSaturation = random(100);
  // }  
}

function draw() {
  let level = mic.getLevel();
  let spectrum = fft.analyze();
  let peakFrequency = findPeakFreq(spectrum);
  let xMove = map(peakFrequency, 150, 390, 0, width)
  // let yMove = map(peakFrequency, 150, 390, 0, height)
  let weight = map(level, 0, 1, 1, 40);
  let hueHue = map(peakFrequency, 0, 1000, 100, 0);
  let saturationSaturation = map(peakFrequency, 0, 1000, 100, 0);
  let brightnessBrightness = map(peakFrequency, 0, 1000, 100, 0);
  colorMode(HSB, 100);
  strokeWeight(weight);
  stroke(hueHue, saturationSaturation, brightnessBrightness);
  line(random(level*400, level*1800), random(level*400, level*1800), mouseX, mouseY);
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
