let flows = [];
let ripps = [];
let music;
let rain;
let water;

async function setup() {
  music = await loadSound("assets/Fragments.mp3");
  rain = await loadSound("assets/Rain.mp3");
  water = await loadSound("assets/water.mp3");

  music.amp(1.0);
  rain.amp(0.1);
  water.amp(0.8);


  music.play();
  rain.play();
  water.play();



  createCanvas(1000, 600);

  for (let i = 0; i < 10; i++) {
    ripps.push(new Ripple(random(width), random(height), random(120)));
  }



  while (flows.length < 200) {


    let x = random(width);
    let y = random(height);
    let overlapping = false;

    for (let flower of flows) {

      let dst = dist(x, y, flower.x, flower.y);

      if (dst < flower.size / 2 + 10) {
        overlapping = true;
        break;
      }
    }

    if (overlapping == false) {
      flows.push(new Flower(x, y, 15));

    }

  }


  //
}

function draw() {
  background(0);

  for (let i = 0; i < height; i++) {
    let amt = map(i, 0, height, 0, 1)
    let c = lerpColor(
      color(55, 127, 134),
      color(139, 189, 176), amt);
    stroke(c);
    line(0, i, width, i);

  }


  for (let i = 0; i < ripps.length; i++) {
    ripps[i].display();
    ripps[i].update();
  }





  for (let i = 0; i < flows.length; i++) {
    flows[i].display();
    flows[i].update();


  }




  //
}

class Ripple {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
  }
  update() {
    this.size += 3;
    if (this.size > 120) {
      this.size = 0;

    }

  }
  display() {
    push()
    noFill();
    stroke(255, 50);
    strokeWeight(5);

    circle(this.x, this.y, this.size);
    pop()


  }

}


class Flower {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.offset = random(TWO_PI);
    this.x2 = 0;
    this.y2 = 0;
    this.angle = 0;
    this.speed = 0;

  }
  update() {
    this.x += (sin(frameCount) * 0.0001 + this.offset) * 0.03;
    this.y += (sin(frameCount) * 0.01 + this.offset) * 0.03;

    let dst2 = dist(mouseX, mouseY, this.x, this.y);

    if (dst2 < 50) {

      this.x2 = (this.x - mouseX) * 0.5;
      this.y2 = (this.y - mouseY) * 0.5;

      this.speed = lerp(this.speed, 0.3, 0.1);

      if (!water.isPlaying()) {
        water.loop();
      }


    } else {
      this.speed = lerp(this.speed, 0, 0.06)


    }

    this.x += this.x2;
    this.y += this.y2;

    this.x2 *= 0.6;
    this.y2 *= 0.6;

    this.angle += this.speed;
  }

  display() {
    push();
    translate(this.x, this.y);

    rotate(this.angle);
    noStroke()

    for (let i = 0; i < 6; i++) {
      ellipse(0, -10, this.size / 2, this.size);
      rotate(PI / 3);
    }
    fill(255, 255, 200);
    circle(0, 0, this.size);
    pop();


  }



}


