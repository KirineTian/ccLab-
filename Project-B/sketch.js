

let notes = []; // 用于存储音符的数组
let numNotes = 50; // 音符的数量

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight); // 创建画布
  noStroke(); // 没有描边
  for (let i = 0; i < numNotes; i++) {
    let note = new Note(random(width), random(height)); // 创建新音符，并随机化起始位置
    notes.push(note); // 将音符添加到数组中
  }
}

function draw() {
  background(255); // 设置背景颜色为白色

  for (let i = 0; i < numNotes; i++) {
    for (let j = i + 1; j < numNotes; j++) { // 遍历每个音符，计算音符之间的距离并计算吸引力
      let distance = dist(notes[i].x, notes[i].y, notes[j].x, notes[j].y);
      if (distance < 80) { // 如果距离小于80像素，则产生吸引力
        let force = (80 - distance) / 1500;
        notes[i].attract(notes[j], force);
        notes[j].attract(notes[i], force);
      }
    }
    notes[i].display(); // 显示每个音符
    notes[i].move(); // 移动每个音符
  }
}

class Note {
  constructor(x, y) {
    this.x = x; // 音符的初始x坐标
    this.y = y; // 音符的初始y坐标
    this.vx = -0.5; // x轴速度
    this.vy = 0.2; // y轴速度
    this.size = 20; // 初始大小
    this.color = color(0, 0, 0, 100); // 纯黑色和半透明
  }

  display() {
    fill(this.color); // 设置颜色
    ellipse(this.x, this.y, this.size, this.size); // 绘制圆形
  }

  move() {
    // 检测碰撞
    if (this.x > width || this.x < 0) {
      this.vx *= -1; // 反向水平速度
    }
    if (this.y > height || this.y < 0) {
      this.vy *= -0.8; // 反弹并减小垂直速度
    }
    
    // 添加重力
    this.vy += 0.05;
    
    // 更新位置和大小
    this.x += this.vx;
    this.y += this.vy;
    this.size -= 0.1;
  }
  

  attract(other, force) { // 计算吸引力并应用到当前音符fu
    let dx = other.x - this.x;
    let dy = other.y - this.y;
    let angle = atan2(dy, dx);
    this.vx += cos(angle) * force;
    this.vy += sin(angle) * force;
  }
}
