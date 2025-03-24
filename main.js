let canvas = document.querySelector('#canvas');
let ctx = canvas.getContext('2d');

let WIDTH = canvas.width = 600;
let HEIGHT = canvas.height = 400;

let lastTime = (new Date()).getTime(),
    currentTime = 0,
    delta = 0,
    fps = 1000;

let count = 0;

let loop = () => {
    window.requestAnimationFrame(loop);

    currentTime = (new Date()).getTime();
    delta = (currentTime - lastTime) / fps;
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
    
    /**  **/
    
    ctx.fillText( `Hello world  ${ count } `, WIDTH / 2, HEIGHT /2);
    if ( count < 1000 ) count ++;
    

    lastTime = currentTime;
}

let init = () => {
    window.requestAnimationFrame(loop);
}

init();