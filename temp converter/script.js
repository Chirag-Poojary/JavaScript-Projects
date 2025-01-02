let inputTemp = document.getElementById("input");
let checkc2f = document.getElementById("c2f");
let checkf2c = document.getElementById("f2c");
let result = document.getElementById("output");
document.getElementById("submit").onclick = function(){
    if(checkc2f.checked){
        let c = inputTemp.value;
        let f = c*9/5+32;
        result.textContent = f.toFixed(2)+"°F";
    }
    else if(checkf2c.checked){
        let f = inputTemp.value;
        let c = (f-32)*5/9;
        result.textContent = c.toFixed(2)+"°C";
    }
    else{
        result.textContent = "Select the conversion type.";
    }
}
