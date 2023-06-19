const gameWindow = document.getElementById("gameWindow");

gameWindow.width = gameWindow.clientWidth;
gameWindow.height = gameWindow.clientHeight;

const ctx = gameWindow.getContext("2d");
let speed = {x: 1, y: 1}


class Rectangle{
    constructor(xPos, yPos, width, height, color, ctx){
    this.xPos = xPos;
    this.yPos = yPos;
    this.width = width;
    this.height = height;
    this.color = color;
    this.ctx = ctx;
  }
    draw(){
        this.ctx.beginPath();
        this.ctx.rect(this.xPos, this.yPos, this.width, this.height);
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
    }

    setXPos(xPos){
        this.xPos = xPos;
    }

    setYPos(yPos){
        this.yPos = yPos;
    }

    getXPos(){
        return this.xPos;
    }

    getYPos(){
        return this.yPos;
    }
}


const keyboardState = {};


document.addEventListener('keydown', (event) => {

  keyboardState[event.key] = true;
});

document.addEventListener('keyup', (event) => {

  keyboardState[event.key] = false;
});

const rect1 = new Rectangle(20, 20, 60, 250, "white", ctx);
const rect2 = new Rectangle(gameWindow.width - 70, 20, 60, 250, "white", ctx);
const rect3 = new Rectangle((gameWindow.width /2) - 30, (gameWindow.height /2) - 30, 60, 60, "white", ctx);

function gameLoop() {
  window.requestAnimationFrame(gameLoop);
  ctx.clearRect(0, 0, gameWindow.width, gameWindow.height);

   if (keyboardState["ArrowUp"]) {

     rect1.setYPos(rect1.getYPos() - 1);
   } else if (keyboardState["ArrowDown"]) {

     rect1.setYPos(rect1.getYPos() + 1);
   } 
   else if (keyboardState["w"]) {

     rect2.setYPos(rect2.getYPos() - 1);
   } else if (keyboardState["s"]) {

     rect2.setYPos(rect2.getYPos() + 1);
   }




  if (rect3.getXPos() >= gameWindow.width - 60){
    speed.x = -2
  }else if (rect3.getXPos() <=  0){
    speed.x = 2
  }
  else if (rect3.getYPos() >= gameWindow.height - 60){
    speed.y = -2
  }else if (rect3.getYPos() <=  0){
    speed.y = 2
  }
  console.log('speed', speed, gameWindow.width, rect3.getXPos())
  rect3.setXPos(rect3.getXPos() + speed.x);
  rect3.setYPos(rect3.getYPos() + speed.y);
//  draw frame
    rect1.draw();
    rect2.draw();
    rect3.draw();
}
window.requestAnimationFrame(gameLoop);

