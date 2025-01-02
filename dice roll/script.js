document.getElementsByClassName("generate")[0].onclick = function(){
    let num1 = Math.floor(Math.random()*6)+1;
    document.getElementById("dice1").textContent = num1;
    let num2 = Math.floor(Math.random()*6)+1;
    document.getElementById("dice2").textContent = num2;
    let num3 = Math.floor(Math.random()*6)+1;
    document.getElementById("dice3").textContent = num3;
}
