noseX=0;
noseY=0;

hatX=0;
hatY=0;

function preload(){
clownNose=loadImage("clown_img2.png");
hat=loadImage("hat.png");

}

function setup(){
canvas=createCanvas(300, 300);
canvas.center();

video=createCapture(VIDEO);
video.size(300,300);
video.hide();

poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on("pose",getPoses);
}

function modelLoaded(){
    console.log("pose net model loaded")
}

function getPoses(results){
    if(results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x-120;
        noseY=results[0].pose.nose.y-100;

        hatX=results[0].pose.nose.x-115;
        hatY=results[0].pose.nose.y-300;
    }
}
function draw(){
image(video,0,0,300,300);
image(clownNose,noseX,noseY,250,200);
image(hat,hatX,hatY,300,200);
}

function take_snapshot(){
    save("animation.png");
}