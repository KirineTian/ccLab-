let notes = []; // 用于存储音符的数组
let numNotes = 5; // 音符的数量

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight); // 创建画布
  canvas.parent("createCanvas");
  for (let i = 0; i < numNotes; i++) {
    let note = new Note(); // 创建新音符
    notes.push(note); // 将音符添加到数组中
  }
}

function draw() {
  background(255); // 设置背景颜色为白色

  for (let i = 0; i < numNotes; i++) {
    notes[i].display(); // 显示每个音符
    notes[i].move(); // 移动每个音符
    notes[i].bounce(); // 反弹每个音符
  }
}

class Note {
  constructor() {
    this.x = random(width); // 音符的初始x坐标
    this.y = random(height); // 音符的初始y坐标
    this.vx = random(-1, 1); // x轴速度
    this.vy = random(-1, 1); // y轴速度
    this.color = color(random(255), random(255), random(255), 100); // 随机颜色
  }

  display() {
    noStroke();
    fill(this.color); // 设置颜色
    ellipse(this.x, this.y, 20, 20); // 绘制圆形
  }

  move() {
    this.x += this.vx; // 增加x坐标
    this.y += this.vy; // 增加y坐标
  }

  bounce() {
    if (this.x > width || this.x < 0) { // 检查x坐标是否越界
      this.vx *= -1; // 改变x轴速度的方向
    }
    if (this.y > height || this.y < 0) { // 检查y坐标是否越界
      this.vy *= -1; // 改变y轴速度的方向
    }
  }
}
