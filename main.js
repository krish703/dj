song="";
leftwristX=0;
leftwristy=0;
rightwristX=0;
rightwristy=0;
scoreleftWrist=0;

function setup(){
    canvas=createCanvas(600,450);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video,0,0,600,450);
}

function preload(){
    
    }
    
    function preload(){
        song=loadSound("");
        }
        
        function playSound(){
            song.play();
        
        
        }

        function gotPoses(results){
            if(results.length>0)
            console.log(results);
            scoreleftWrist=results[0].pose.keypoints[9].score;
            console.log("scoreleftWrist"+scoreleftWrist);
        }
        function draw(){
            image(video,0,0,600,450);
            fill("#ff1100");
            stroke("#b8f2ea");
            if(scoreleftWrist>0.2){
            circle(leftwristX,leftwristy,20);
            numberLeftwristy=Number(leftwristy);
            remove_decimal=floor(numberLeftwristy);
            song.song.play();
            }
        }
        