let count = 0;
document.getElementById("increment").onclick = function(){
    count++;
    document.getElementById("counter").textContent = count;
    updatecolor();
}
document.getElementById("decrement").onclick = function(){
    count--;
    document.getElementById("counter").textContent = count;
    updatecolor();
}
document.getElementById("reset").onclick = function(){
    count=0;
    document.getElementById("counter").textContent = count;
    updatecolor();
}
function updatecolor(){
    if(count>0){
        document.getElementById("counter").style.color = "green";
    }
    else if(count<0){
        document.getElementById("counter").style.color = "red";
    }
    else{
        document.getElementById("counter").style.color = "white";
    }
}