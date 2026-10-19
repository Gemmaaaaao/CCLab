/*
Template for IMA's Creative Coding Lab 

Project A: Generative Creatures
CCLaboratories Biodiversity Atlas 
*/

let clickCount = 0;
let txtX, txtY;
let txtDuration = 0;
let dotColor;
let words = ["envy+1", "anxiety+1", "anger+1", "laziness+1", "despair+1"];
let words2 = ["stop", "no more", "PLEASE", "STOP"];


let currentWord, currentWord2;

function setup() {

    createCanvas(800, 500);
    let x = 100;
    let y = 400;
    txtX = 100;
    txtY = 100;
    dotColor = color(0);
    ox = width / 2;
    oy = height / 2;
    rx = random(-3, 3);
    ry = random(-3, 3);


}

function mousePressed() {

    txtX = mouseX;
    txtY = mouseY;
    txtDuration = 60 * 2;

    currentWord = random(words);
    currentWord2 = random(words2);



    clickCount++;
}



function draw() {
    background(25);





    if (clickCount < 10) {

        //background
        for (let x = 0; x < width; x++) {
            let freq = x + frameCount * 0.0013
            let amp = 300;
            let sinValue = sin(freq) * amp;
            //let randomValue = random(-1,1)*amp;
            let y = height / 2 + sinValue
            let dia = random(1, 10);

            noStroke();
            fill(255, 0, 0)
            circle(x, y, dia)
        }



        //portal
        for (let i = 0; i < 15; i += 1) {
            noFill()
            strokeWeight(i + 10);
            stroke(i * 25, 0, 0);
            let off = noise(frameCount / 50 + i) * 50
            circle(width / 2, height / 2, 400 + i * 50 + off)
        }

        //eye
        for (let i = 0; i < 10; i += 1) {
            let x = width / 2
            let y = height / 2
            let percentage = 0.02;
            x = lerp(x, mouseX, percentage);
            y = lerp(y, mouseY, percentage);
            noStroke();
            fill(255);
            ellipse(width / 2, height / 2, 50, 40);
            dotColor = lerpColor(dotColor, mouseIsPressed ? color(255, 0, 0) : color(0), 0.02);
            fill(dotColor);

            circle(x, y, 27);

        }


    }

    //portal
    else if (clickCount < 20) {
        push()
        for (let i = 0; i < 15; i += 1) {
            let freq = frameCount * 0.1 + i;
            let r = map(sin(freq * 1.0), -1, 1, 255, 0);
            let g = map(sin(freq * 1.3), -1, 1, 255, 0);
            let b = map(sin(freq * 0.5), -1, 1, 255, 0);

            noFill()
            strokeWeight(i + 10);
            stroke(r, g, b);
            let off = noise(frameCount / 50 + i) * 50
            circle(width / 2, height / 2, 400 + i * 50 + off);
            pop();
        }






        //eyes
        noStroke();
        fill(255);

        for (let i = 0; i < 10; i++) {
            let x2 = map(noise(i * 500 + 10000, frameCount * 0.01), 0, 1, 50, width);
            let y2 = map(noise(i * 500 + 100000, frameCount * 0.01), 0, 1, 50, height - 50)

            let freq = frameCount * 0.1 + i;
            let r = map(sin(freq * 1.0), -1, 1, 255, 0);
            let g = map(sin(freq * 1.3), -1, 1, 255, 0);
            let b = map(sin(freq * 0.5), -1, 1, 255, 0);

            fill(r, g, b);
            ellipse(x2, y2, 50, 40)

            let freq2 = frameCount * 0.1 + i;
            let r2 = map(sin(freq * 3.2), -1, 1, 255, 0);
            let g2 = map(sin(freq * 2.5), -1, 1, 255, 0);
            let b2 = map(sin(freq * 1.3), -1, 1, 255, 0);

            fill(r2, g2, b2);

            circle(x2 + sin(frameCount * 0.05 + i) * 10, y2, 27);


            let r3 = map(sin(freq * 2.2), -1, 1, 255, 0);
            let g3 = map(sin(freq * 3.5), -1, 1, 255, 0);
            let b3 = map(sin(freq * 0.3), -1, 1, 255, 0);

            fill(r3, g3, b3)
            circle(x2 + sin(frameCount * 0.05 + i) * 10, y2, 20);

            let r4 = map(sin(freq * 4), -1, 1, 255, 0);
            let g4 = map(sin(freq * 5), -1, 1, 255, 0);
            let b4 = map(sin(freq * 3.7), -1, 1, 255, 0);

            fill(r4, g4, b4)
            circle(x2 + sin(frameCount * 0.05 + i) * 10, y2, 15)




        }
    }


    else if (clickCount < 30) {

        //background
        let gridSize = 50;
        let offset = random(10, -10)
        for (let y3 = 0; y3 < height; y3 += gridSize * 0.6) {
            for (let x3 = 0; x3 < width; x3 += gridSize * 2.3) {

                let dia = random(25, 30)
                noStroke();
                fill(250, 0, 255, 160);
                textSize(dia)
                text("closeGate", x3 + offset + 3, y3)

                noStroke();
                fill(0, 255, 0, 130);
                textSize(dia)
                text("closeGate", x3 + offset - 3, y3)
            }

        }



        //eye
        let x5 = random(390, 420);
        let y5 = random(250, 263);

        fill(255);
        ellipse(width / 2, height / 2, 50, 40);
        fill(0);
        circle(x5, y5, 27);

        stroke(150, 20, 20);
        strokeWeight(2);

        //blood
        for (let i = 0; i < 8; i++) {
            let x6 = width / 2 + random(-15, 15);

            line(x6, height / 2 + 25, x6 + random(-5, 5), height / 2 + 15 + frameCount * 0.3);

        }


    }


    else if (clickCount < 35) {
        push();
        randomSeed(1000);
        let offset = random(10, -80);
        // background
        for (let i = 0; i < 100; i++) {


            let x4 = 400 + random(-400, 500);
            let y4 = 400 + random(400, -400);
            let w = random(20, 350)
            let h = random(350, 90);
            let colors = [color(0), color(255, 255, 255), color(255, 0, 0), color(0, 0, 255), color(0, 255, 255), color(200, 0, 255), color(255, 255, 0)];
            fill(random(colors));
            noStroke();
            rect(x4 + offset, y4, w, h);

        }

        stroke(0);
        strokeWeight(random(0, 2));
        for (let i = 0; i < 30; i++) {
            let x7 = random(width)
            line(x7, 0, x7, random(height));

        }



    }

    if (clickCount < 10) {
        if (txtDuration > 0) {
            let a = map(txtDuration, 60, 0, 255, 0);
            fill(255, 0, 0, a)
            noStroke();
            strokeWeight(2);
            textSize(25)
            text("anxiety+1", txtX + random(-3, 3), txtY + random(-3, 3));
            txtDuration--;
        }
    }


    else if (clickCount < 20) {
        if (txtDuration > 0) {
            push();
            let a = map(txtDuration, 60, 0, 255, 0);
            fill(random(255), random(255), random(255), a);
            noStroke();
            textSize(25)
            text(currentWord, txtX + random(-3, 3), txtY + random(-3, 3));
            txtDuration--;
            pop();

        }
    }
    else if (clickCount < 30) {
        if (txtDuration > 0) {
            let a = map(txtDuration, 60, 0, 255, 0);
            push();
            fill(255, 0, 0, a);
            noStroke();

            textSize(25)
            text(currentWord2, txtX + random(-3, 3), txtY + random(-3, 3));
            txtDuration--;
            pop()

        }

    }
    else if (clickCount < 35) {

        if (txtDuration > 0) {
            let a = map(txtDuration, 60, 0, 255, 0);
            push();
            fill(255, 0, 0, a);
            noStroke();
            textSize(25)
            text("OVERLOAD: TOXIC EMOTION CAPACITY EXCEEDED", txtX, txtY);
            txtDuration--;

        }
    }


    else if (clickCount >= 35) {
        background(0);



        let x9 = width / 2;
        let y9 = height / 2;

        x9 = x9 + random(-3, 3);
        y9 = y9 + random(-3, 3);
        textSize(50);
        fill(255, 0, 0)
        text("I SEE YOU ", x9, y9)



        rx = rx + random(-2.5, 1.5);
        ry = ry + random(-2.5, 1.5);

        ox = ox + rx;
        oy = oy + ry;

        if (ox < 0 || ox > width) {
            rx = rx * -1;
        }
        if (oy < 0 || oy > height) {
            ry = ry * -1;
        }
        push();
        translate(ox, oy)
        rotate(frameCount * 0.004);
        fill(0);
        circle(0, 0, 200);




        stroke(0)
        fill(255);
        ellipse(10, 0, 60, 30);
        fill(0);
        circle(10, 0, 25);
        fill(255);
        ellipse(-10, 10, 40, 20);
        fill(0);
        circle(-10, 10, 10);
        fill(255);
        ellipse(20, 0, 50, 30);
        fill(0);
        circle(20, 0, 20);
        fill(255);
        ellipse(30, 40, 60, 30);
        fill(0);
        circle(30, 40, 20);
        fill(255);
        ellipse(-60, -49, 60, 40);
        fill(0)
        circle(-60, -49, 20);
        fill(255);
        ellipse(50, -50, 45, 25);
        fill(0);
        circle(50, -50, 10);
        fill(255);
        ellipse(60, -45, 30, 19);
        fill(0);
        circle(60, -45, 8);
        fill(255);
        ellipse(0, -75, 50, 30);
        fill(255);
        ellipse(-30, +10, 45, 25);
        fill(0);
        circle(-30, 10, 10);
        fill(255);
        ellipse(80, 45, 60, 40);
        fill(0);
        circle(80, 45, 20);
        fill(255);
        ellipse(75, -30, 50, 25);
        fill(0);
        circle(75, -30, 10);
        fill(255);
        ellipse(-50, 60, 40, 20);
        fill(0);
        circle(-50, 60, 10);

        stroke(150, 0, 0);
        strokeWeight(random(1, 4));
        for (let i = 0; i < 10; i++) {

            line(0, 0, random(-100, 100), random(-100, 100));
        }


        pop();

    }




    //stroke(255)
    //strokeWeight(1)
    //fill(255)
    //textSize(10)
    //text(round(mouseX),10,20)
    //text(round(mouseY),10,40)


}

