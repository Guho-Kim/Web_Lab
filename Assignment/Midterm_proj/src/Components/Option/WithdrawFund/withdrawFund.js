function incFunction(value){
    let withdrawInput = document.getElementById("withdrawInput");
    let currentValue = parseFloat(withdrawInput.value) || 0;
    withdrawInput.value = currentValue+value;
}
function decFunction(value){
    let withdrawInput = document.getElementById("withdrawInput");
    let currentValue = parseFloat(withdrawInput.value) || 0;
    // prevent withdraw minus value
    if((currentValue-value)>=0){
        withdrawInput.value = currentValue-value;
    }
}
function setFunction(){
    location.href="./../option.html";
}

function backFunction(){
    location.href="./../option.html";
}
function enterFunction(){

}