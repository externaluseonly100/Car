let run=true;
let block_x;
let block_y;
let deg=0;
let car_x=555;
let car_y=270;
let count=0;
let score=0;
let miss=0;
let fuel=0;
let block_count=0;
var playerName="";
let start=0;

function submit(){
    playerName= document.getElementById("infoName").value;
    start= document.getElementById("infoName").value;
    if(start!=""){
        document.getElementById("playerInfo").style.display="none";
        start=1;
    }
    else{
        document.getElementById("para").style.color="red";
        document.getElementById("para").innerText="Required";
        setTimeout(()=>
            document.getElementById("para").innerText="",3000
        )
    }


console.log(`Start:${start}`);
if(start==1){console.log("hii");
    document.getElementById("outerBox").style.display="block";
    document.getElementById("block").style.display="block";
    document.getElementById("innerBox").style.display="block";
    let box=document.getElementById("innerBox");
    document.addEventListener("keydown", eventt=>{
        if(run){
            //TOUCH SCREEN
            // let touchL=0;
            // document.getElementById("left").addEventListener("click", e=>{
            //     console.log("clicked");
            //     car_x-=10;
            //     box.style.left=`${car_x}px`;
            //     box.style.rotate=`270deg`;
            // });

            // console.log(event.key);
            if(event.key=="ArrowRight"){
                if(car_x>=20 && car_x<=1065 && car_y>0 && car_y<380){
                    car_x+=10;
                    box.style.left=`${car_x}px`;
                    box.style.rotate=`90deg`;
                }
            }
            if(event.key=="ArrowLeft"){
                if(car_x>=20 && car_x<=1065 && car_y>0 && car_y<380){
                    car_x-=10;
                    box.style.left=`${car_x}px`;
                    box.style.rotate=`270deg`;
                }touchL=0;
            }
            if(event.key=="ArrowUp"){
                if(car_x>=20 && car_x<=1065 && car_y>0 && car_y<380){
                    car_y-=10;
                    box.style.top=`${car_y}px`;
                    box.style.rotate=`0deg`;
                }
            }
            if(event.key=="ArrowDown"){
                if(car_x>=20 && car_x<=1065 && car_y>0 && car_y<380){
                    car_y+=10;
                    box.style.top=`${car_y}px`;
                    box.style.rotate=`180deg`;
                }
            }

            if(car_x>block_x-80 && car_x<=block_x+55 && car_y>=block_y-100 && car_y<=block_y+34){
                    document.getElementById("block").style.background="transparent";
                    count ++;
            }
            // else block.style.background="pink";
        }    
    });
    let block=document.getElementById("block");
    setInterval(fun, 3750);
    function fun(){
        if(run){
            if(count>0){
                score ++;
                // document.getElementById("roof").innerText=`${score}`;
                count=0;
                
                if(miss>=1 && miss<=3){
                    miss =1;
                    
                    document.getElementById("box3").style.background="green";
                    document.getElementById("box2").style.background="yellow";
                }
            }
            // TERMINATION
            else {
                miss ++;
                if(miss==2){
                    document.getElementById("box3").style.background="transparent";
                }
                if(miss==3){
                    document.getElementById("box2").style.background="transparent";
                }
                if(miss==4 || car_x==15 || car_x==1075 || car_y==0 ||car_y==380){
                    run=false;//TERMINATION CONDITION

                    if(car_x==15 || car_x==1075 || car_y==0 ||car_y==380){
                        document.getElementById("carEventResult").innerText="~Collided~";
                        document.getElementById("box3").style.background="transparent";
                        document.getElementById("box2").style.background="transparent";
                    }
                    else{
                        document.getElementById("carEventResult").innerText="~Out of fuel~";
                    }

                    document.getElementById("box1").style.background="transparent";
                    document.getElementById("outerBox").style.border="2px solid red";

                    //RESULT PAGE
                    document.getElementById("innerBox").style.display="none";
                    document.getElementById("block").style.display="none";
                    document.getElementById("outerBox").style.display="flex";
                    document.getElementById("outerBox").style.justifyContent="center";
                    document.getElementById("outerBox").style.alignItems="center";
                    document.getElementById("result").style.display="block";

                    document.getElementById("resultPlayerName").innerText=`${playerName}`;
                    document.getElementById("resultPlayerScore").innerText=`Your score is: ${score*10}`;


                    // FILE HANDLING
                    // const input={
                    //     dd:new Date().getDate(),
                    //     mm:new Date().getMonth(),
                    //     yy:new Date().getFullYear(),
                    //     hr:new Date().getHours(),
                    //     min:new Date().getMinutes(),
                    //     sec:new Date().getSeconds()
                    // };
                    
                    // const fs = require("fs");
                    // fs.appendFileSync("./Game.txt", `${input.dd}/${input.mm}/${input.yy} `);
                    // fs.appendFileSync("./Game.txt", `${input.hr}:${input.min}:${input.sec} `);
                    // fs.appendFileSync("./Game.txt", `${playerName}, ${_score}\n`);
                }
            }

            block.style.display="block";
            block_count ++;
            block.innerText=block_count;

            document.getElementById("car").style.display="none";
            // let dt= new Date().getSeconds();
            block_y=Math.floor(Math.random()*420);
            block_x=Math.floor(Math.random()*1100);
            // block_y=420;
            // block_x=1100;

            
            block.style.top=`${block_y}px`;
            block.style.left=`${block_x}px`;
            block.style.background="rgb(54, 54, 202)";

            //SCORE IN MENU BAR
            let _score=score*10;
            if(_score<10)
                document.getElementById("score").innerText=`0${score*10}`;
            else document.getElementById("score").innerText=`${score*10}`;

            //AUTO CAR MOVE
            // setInterval(function carMove(){
            //     car_x ++;
            //     document.getElementById("innerbox").style.top=car_x;
            //     car_y ++;
            // },10);
        }
    }
    //TIMER
    let hr=0, min=0, sec=0;
    setInterval(function timer(){console.log(`X:${car_x} Y:${car_y}`);
        if(run){
            sec ++;
            if(sec==60){
                min ++;
                sec=0;
            }
            if(min==60)
                hr ++;

            if(sec<10 && min<10)
                document.getElementById("timer").innerText=`0${hr}:0${min}:0${sec}`;
            if(sec>=10 && min<10)
                document.getElementById("timer").innerText=`0${hr}:0${min}:${sec}`;
            if(sec<10 && min>=10)
                document.getElementById("timer").innerText=`0${hr}:${min}:0${sec}`;
            if(sec>=10 && min>=10)
                document.getElementById("timer").innerText=`0${hr}:${min}:${sec}`;
        }
    },1000);
    
}
}