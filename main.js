x = 0;
y = 0;
draw_circle = "";
draw_rect = "";

var speechRecognition = window.webkitSpeechRecognition;
var recognition = new speechRecognition;

function start() {
    document.getElementById("status").innerHTML = "System is listening , pls speak";
    recognition.start();
}

function setup() {
    canvas = createCanvas(900 , 600);
}

recognition.onresult = function(event) {
    console.log = event;
    var content = event.results[0][0].transcript;
    document.getElementById("status").innerHTML = "The speech has benn recognized as : "+content;
    if (content == "circle") {
        x = Math.floor(Math.random()*900);
        y = Math.floor(Math.random()*600);
        document.getElementById("status").innerHTML = "Drawing Circle";
        draw_circle = "set";
    }
    if (content == "rectangle") {
        x = Math.floor(Math.random()*900);
        y = Math.floor(Math.random()*600);
        document.getElementById("status").innerHTML = "Drawing Rectangle";
        draw_rect = "set";
    }
}

function draw() {
    if (draw_circle == "set") {
        radius = Math.floor(Math.random()*100);
        circle(x , y , radius);
        document.getElementById("status").innerHTML = "Circle is drawn";
        draw_circle = "";
    }
    if (draw_rect == "set") {
        width = Math.floor(Math.random()*150);
        height = Math.floor(Math.random()*100);
        rect( x, y , width , height);
        document.getElementById("status").innerHTML = "Rectangle is drawn";
        draw_rect = "";
    }
}