let gameWindow = document.getElementById("gameWindow");
let gameWindowWall = gameWindow.getBoundingClientRect();
let positiex = 0;
let positiey = 0;
let snelheidx = 1;
let snelheidy = 1;

function ballmove(){
    positiex = positiex + snelheidx;
    positiey = positiey + snelheidy;

    document.getElementById("ball").style.left = positiex + "px";
    document.getElementById("ball").style.top = positiey + "px";
   
  if(positiex>555){
    snelheidx = -2;
  }
  if(positiex<-555){
    snelheidx = 2;
  }
  if(positiey>285){
    snelheidy = -2;
  }
  if(positiey<-285){
    snelheidy = 2;
  }
//   if(positiex>285 . positiey>180){
//     snelheidx = -2 . snelheidy = -2;
//   }
  window.requestAnimationFrame(ballmove);
};

ballmove();


console.log(gameWindowWall);