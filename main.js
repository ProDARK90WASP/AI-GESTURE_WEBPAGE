noseX=0;
noseY=0;
lwristX=0;
rwristX=0;
difference=0;
function setup(){
    canvas=createCanvas(530,430);
    canvas.position(730,160);
    video=createCapture(VIDEO);
    video.size(530,430);
    video.position(130,160)
    PoseNet=ml5.poseNet(video,modelloaded)
    PoseNet.on('pose',got_poses);
}
function modelloaded(){
    console.log("modelloaded");
}
function got_poses(result){
    if(result.length>0){
        console.log(result);
        noseX=result[0].pose.nose.x;
        noseY=result[0].pose.nose.y;
        lwristX=result[0].pose.leftWrist.x;
        rwristX=result[0].pose.rightWrist.x;
        difference=lwristX-rwristX;
    }
}
function draw(){
    background("white");
    fill("#170573");
    stroke("#ff0000");
    square(noseX,noseY,difference);
}