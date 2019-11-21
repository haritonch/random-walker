var x;
var y;
var T=100, stepSize=10;
var canvasHeight = window.screen.height;
var canvasWidth = window.screen.width;

function setup(){
    createCanvas(canvasWidth, canvasHeight);
    x = canvasWidth/2;
    y = canvasHeight/2;
    background(51);
}

function draw() {
    stroke(255);
    rect(x, y, 10, 10);
    fill(color(random(255), random(255), random(255)));
    strokeWeight(1);
    
    var r = floor(random(4));
    switch (r) {
        case 0:
            x = x + stepSize;
            break;
        case 1:
            x = x - stepSize;
            break;
        case 2:
            y = y + stepSize;
            break;
        case 3:
            y = y - stepSize;
            break;
    }
    sleep(T);
}

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}
