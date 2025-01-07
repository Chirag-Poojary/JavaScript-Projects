let elapsedTime = 0;
let timer = null;
let startTime = 0;
let isRunning = false;
const Display = document.getElementById("display");
function start(){
    if(!isRunning){
        startTime = Date.now() - elapsedTime;
        timer = setInterval(update, 10);
        isRunning = true;
    }
}
function stop(){
    if(isRunning){
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
        isRunning = false;
    }
}
function reset(){
    clearInterval(timer);
    elapsedTime = 0;
    startTime = 0;
    isRunning = false;
    Display.textContent = "00:00:00:00";
}
function update(){
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;
    let hrs = Math.floor(elapsedTime / 3600000);
    let mins = Math.floor(elapsedTime/(1000*60) % 60);
    let secs = Math.floor(elapsedTime/1000) % 60;
    let ms = Math.floor(elapsedTime % 1000 / 10);
    hrs = String(hrs).padStart(2, "0");
    mins = String(mins).padStart(2, "0");
    secs = String(secs).padStart(2, "0");
    ms = String(ms).padStart(2, "0");
    Display.textContent = `${hrs}:${mins}:${secs}:${ms}`;
}