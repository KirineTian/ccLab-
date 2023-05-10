let x=0;
function setup() {
    let canvas = createCanvas(2000, 40);
    canvas.parent("canvasContainer2");

  }

  function draw(){
    background(255, 182, 193);
    text("Matrix Generator", x, height/2)
    x=x+1;

    if(x>width){
      x=0;
    }
  }