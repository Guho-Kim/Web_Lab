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
function setFunction(value){
    localStorage.setItem('withdrawAmount',value);
    location.href="./CheckWithdraw/checkWithdraw.html";
}

function backFunction(){
    location.href="./../option.html";
}
function enterFunction(){
    let withdrawInput = document.getElementById("withdrawInput");
    let currentValue = parseFloat(withdrawInput.value) || 0;
    let value = parseFloat(withdrawInput.value) || 0;
    // prevent withdraw zero value
    if(value>0){
        localStorage.setItem('withdrawAmount',JSON.stringify(value));
        location.href="./CheckWithdraw/checkWithdraw.html";

    }
}