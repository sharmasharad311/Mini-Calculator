function reset(){
    document.getElementById("value1").value = "";
    document.getElementById("value2").value = "";
    document.getElementById("result").value = "";
}


function add(){
    let num1 = Number(document.getElementById("value1").value);
    let num2 = Number(document.getElementById("value2").value);
    let result = num1+num2;
    document.getElementById("result").value = String(result);
}
function mul(){
    let num1 = Number(document.getElementById("value1").value);
    let num2 = Number(document.getElementById("value2").value);
    let result = num1*num2;
    document.getElementById("result").value = String(result);
}
function div(){
    let num1 = Number(document.getElementById("value1").value);
    let num2 = Number(document.getElementById("value2").value);
    let result = num1/num2;
    document.getElementById("result").value = String(result);
}
function sub(){
    let num1 = Number(document.getElementById("value1").value);
    let num2 = Number(document.getElementById("value2").value);
    let result = num1-num2;
    document.getElementById("result").value = String(result);
}
