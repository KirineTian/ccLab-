

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight); // 创建画布
  canvas.parent(canvasContainer);
}

function draw() {
  background(255); // 设置背景颜色为白色
  stroke(0);
  noFill();
  circle(width/2, height/2, width/2);
  if(mouseIsClicked){
    if (dist(mouseX, mouseY, width/2, height/2) < width/2) {
      // 如果是，重定向到指定的 URL 地址
      window.open("index2.html", "_self");
    }
  }
}

// function mouseClicked(){
//   if (dist(mouseX, mouseY, width/2, height/2) < width/2) {
//     // 如果是，重定向到指定的 URL 地址
//     window.location.href = "index2.html";
//   }
// }
