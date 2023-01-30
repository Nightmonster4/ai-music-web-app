sahara = "";
rave = "";

function preload(){
    sahara = loadSound("sahara.mp3");
    rave = loadSound("rave-official-audio.mp3");
}

function setup(){
    canvas = createCanvas(700, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 0, 0, 700, 500);
}