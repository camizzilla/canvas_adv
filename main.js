let canvas = document.querySelector('#canvas');
let ctx = canvas.getContext('2d');

let WIDTH = canvas.width = 600;
let HEIGHT = canvas.height = 400;

let lastTime = (new Date()).getTime(),
    currentTime = 0,
    delta = 0,
    fps = 1000;
let background = '';

/********************/
/****FUNCTIONS******/
/******************/

async function loadImage(url) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = (err) => reject(err);
      img.src = url;
    });
  }
  
async function drawBackground(){
  const imageUrl = 'assets/images/kitchen-drawing.jpg';
  background = await loadImage(imageUrl);
}

let init = () => {
    drawBackground();
    window.requestAnimationFrame(loop);
}

let loop = () => {
    window.requestAnimationFrame(loop);

    currentTime = (new Date()).getTime();
    delta = (currentTime - lastTime) / fps;
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
    
    /**  **/
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
    ctx.drawImage( background, 0, 0, WIDTH, HEIGHT);

    lastTime = currentTime;
}



init();