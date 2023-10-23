// script.js
function appendFunction(value) {
  let accountInput = document.getElementById("accountInput");
  accountInput.value += value;
}

function deleteFunction() {
  let accountInput = document.getElementById("accountInput");
  accountInput.value = accountInput.value.slice(0, -1);
}
function checkAccountFunction(){
  let accountInput = document.getElementById("accountInput");
  if(accountInput.value != "1234567890123456"){
    alert("That account number does not exist!");
  }else{
    //alert("correct!");
    window.location.href = "pin.html";
  }
}

let count=5;
function checkPinFunction(){
  let accountInput = document.getElementById("accountInput");
  if(accountInput.value!="1234" && count >0){
    alert("Incorrect PIN. You have "+count+" attemps left"); 
    count=count-1;
  }
  else{
    window.location.href = "./option/option.html";
  }
}
function returnFunction(){
    window.location.href="index.html";
}