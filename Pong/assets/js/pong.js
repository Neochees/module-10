const gameWindow = document.getElementById("gameWindow");

gameWindow.width = gameWindow.clientWidth;
gameWindow.height = gameWindow.clientHeight;

const ctx = gameWindow.getContext("2d");


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

const rect1 = new Rectangle(20, 20, 55, 250, "hotpink", ctx);

function gameLoop() {
  window.requestAnimationFrame(gameLoop);
  ctx.clearRect(0, 0, gameWindow.width, gameWindow.height);

   if (keyboardState["ArrowUp"]) {

     rect1.setYPos(rect1.getYPos() - 1);
   } else if (keyboardState["ArrowDown"]) {

     rect1.setYPos(rect1.getYPos() + 1);
   } else if (keyboardState["ArrowLeft"]) {

     rect1.setXPos(rect1.getXPos() - 1);
   } else if (keyboardState["ArrowRight"]) {

     rect1.setXPos(rect1.getXPos() + 1);
   }

    rect1.draw();
}
window.requestAnimationFrame(gameLoop);

