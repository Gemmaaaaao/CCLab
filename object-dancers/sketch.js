/*
  Check our the GOAL and the RULES of this exercise at the bottom of this file.
  
  After that, follow these steps before you start coding:

  1. rename the dancer class to reflect your name (line 35).
  2. adjust line 20 to reflect your dancer's name, too.
  3. run the code and see if a square (your dancer) appears on the canvas.
  4. start coding your dancer inside the class that has been prepared for you.
  5. have fun.
*/

let dancer;

function setup() {
  // no adjustments in the setup function needed...
  createCanvas(windowWidth, windowHeight);

  // ...except to adjust the dancer's name on the next line:
  dancer = new GemmaDancer(width / 2, height / 2);
}

function draw() {
  // you don't need to make any adjustments inside the draw loop
  background(0);
  drawFloor(); // for reference only

  dancer.update();
  dancer.display();
}

// You only code inside this class.
// Start by giving the dancer your name, e.g. LeonDancer.
class GemmaDancer {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.y1 = startY;
    this.color = "gray";
    this.x2 = -10;
    this.y2 = 45;
    // add properties for your dancer here:
    //..
    //..
    //..
  }
  update() {
    // update properties here to achieve
    // your dancer's desired moves and behaviour
    this.x2 = this.x2 + cos(frameCount * 0.1) * 2;
    this.y2 = 45 + sin(frameCount * 0.1) * 2;
    this.y3 = 40 + sin(frameCount * 0.1) * 2;
    this.angle = sin(frameCount * 0.1) * 0.3;
    this.y1 = 10 + sin(frameCount * 0.1) * 2;
    push();
    stroke(this.color);
    strokeWeight(4);
    translate(this.x, this.y);
    push();
    rotate(this.angle);
    line(-10, 0, -30, this.y2);
    pop();
    push();
    rotate(this.angle * -1);
    line(-20, 0, -20, 40);
    pop()
    line(30, 0, 30, 50);
    line(40, 0, 40, 55);
    push();
    rotate(this.angle);
    stroke("coral");
    noFill();
    arc(63, 5, 50, 40, 15, 0, PI);
    pop();
    pop();
  }
  display() {
    // the push and pop, along with the translate 
    // places your whole dancer object at this.x and this.y.
    // you may change its position on line 19 to see the effect.
    push();
    translate(this.x, this.y);


    // ******** //
    // ⬇️ draw your dancer from here ⬇️
    fill(this.color);
    triangle(-60, this.y1, 60, 45, 60, -40)
    fill(0);
    circle(-20, 3 + sin(frameCount * 0.1) * 2, 5);
    circle(-24, -2 + sin(frameCount * 0.1) * 2, 5);
    fill("coral");
    noStroke();
    arc(-55, this.y1, 8, 15, 0, PI);
    //stroke(0);
    fill(this.color);
    circle(-10, -12 + sin(frameCount * 0.1) * 2, 10);
    stroke(0);
    arc(0, 0 + sin(frameCount * 0.1) * 2, 10, 10, PI, 0);


    // ⬆️ draw your dancer above ⬆️
    // ******** //

    // the next function draws a SQUARE and CROSS
    // to indicate the approximate size and the center point
    // of your dancer.
    // it is using "this" because this function, too, 
    // is a part if your Dancer object.
    // comment it out or delete it eventually.
    //this.drawReferenceShapes()

    pop();
  }
  drawReferenceShapes() {
    noFill();
    stroke(255, 0, 0);
    line(-5, 0, 5, 0);
    line(0, -5, 0, 5);
    stroke(255);
    rect(-100, -100, 200, 200);
    fill(255);
    stroke(0);
  }
}



/*
GOAL:
The goal is for you to write a class that produces a dancing being/creature/object/thing. In the next class, your dancer along with your peers' dancers will all dance in the same sketch that your instructor will put together. 

RULES:
For this to work you need to follow one rule: 
  - Only put relevant code into your dancer class; your dancer cannot depend on code outside of itself (like global variables or functions defined outside)
  - Your dancer must perform by means of the two essential methods: update and display. Don't add more methods that require to be called from outside (e.g. in the draw loop).
  - Your dancer will always be initialized receiving two arguments: 
    - startX (currently the horizontal center of the canvas)
    - startY (currently the vertical center of the canvas)
  beside these, please don't add more parameters into the constructor function 
  - lastly, to make sure our dancers will harmonize once on the same canvas, please don't make your dancer bigger than 200x200 pixels. 
*/