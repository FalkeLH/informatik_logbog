let x = 100;
let y = 100;
let a = 0;

function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(220);
    a = (a+0.005)%180;
    [x, y] = steer(x, y, a, 0.5);
    draw_car(x, y);
}

function draw_car(x, y) {
    rect(x, y, 70,50);
}

function steer(x, y, a, s) {
    return([x + cos(a)*s, y + sin(a)*s]);
}