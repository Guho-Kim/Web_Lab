export const currentBalance = 2000;
/*
let balanceElement = document.getElementById('balance');
balanceElement.textContent = currentBalance;
*/
// index.html
function appendFunction(value) {
  let accountInput = document.getElementById("accountInput");
  accountInput.value += value;
}

function deleteFunction() {
  let accountInput = document.getElementById("accountInput");
  accountInput.value = accountInput.value.slice(0, -1);
}
function checkAccountFunction() {
  let accountInput = document.getElementById("accountInput");
  if (accountInput.value != "1234567890123456") {
    alert("That account number does not exist!");
  } else {
    window.location.href = "./Components/Pin/pin.html";
  }
}
// pin.html
/*
let count=5;
function checkPinFunction(){
  let accountInput = document.getElementById("accountInput");
  if(accountInput.value!="1234" && count >0){
    alert("Incorrect PIN. You have "+count+" attemps left"); 
    count=count-1;
  }
  else{
    window.location.href = "./../Option/option.html";
  }
}

function returnFunction(){
    window.location.href="./../../index.html";
}
*/
// option.html
/*
let balanceElement = document.getElementById('balance');
balanceElement.textContent = currentBalance;

function accountInfoFunction() {
  location.href = "./AccountInfo/accountInfo.html";
}
function withdrawFundFunction() {
  location.href = "./WithdrawFund/withdrawFund.html";
}
function depositFundFunction() {
  location.href = "./DepositFund/depositFund.html";
}
function transferFunction() {
  location.href = "./Transfer/transfer.html";
}
// accountInfo.js
function backFunction() {
  location.href = "./../option.html";
}
*/

//depositFund.js


/*
function depositAppendFunction(value) {
  let depositInput = document.getElementById("depositInput");
  if (value == ".") {
    let dotCard = document.getElementById("dot-card");
    dotCard.style.backgroundColor = "lightgray";
  }
  depositInput.value += value;
}

function depositDeleteFunction() {
  let depositInput = document.getElementById("depositInput");
  let length = depositInput.value.length;
  if (length > 0) {
    if (depositInput.value.charAt(length - 1) == ".") {
      let dotCard = document.getElementById("dot-card");
      dotCard.style.backgroundColor = "rgb(241, 237, 237)";
    }
  }
  depositInput.value = depositInput.value.slice(0, -1);
}


let transactions = [
  { date: '2023-10-24', fundsOut: 0, fundsIn: 0, runningBalance: currentBalance },
];
const table = document.getElementById("data-table");
function addRowToTable(transaction, table) {
  const newRow = table.insertRow();
  const dateCell = newRow.insertCell();
  const fundsOutCell = newRow.insertCell();
  const fundsInCell = newRow.insertCell();
  const runningBalanceCell = newRow.insertCell();

  dateCell.textContent = transaction.date;
  fundsOutCell.textContent = transaction.fundsOut;
  fundsInCell.textContent = transaction.fundsIn;
  runningBalanceCell.textContent = transaction.runningBalance;
}

function depositEnterFunction() {
  let depositInput = document.getElementById("depositInput");
  
  let depositAmount = parseFloat(depositInput.value);
  currentBalance = currentBalance + depositAmount;
  const newTransaction = {
    date: '2023-10-26',
    fundsOut: 0,
    fundsIn: depositAmount,
    runningBalance: currentBalance
  };
  transactions.push(newTransaction);
  addRowToTable(newTransaction, table);
  // 데이터를 포함한 `transactions` 배열을 사용하여 테이블에 행 추가
  transactions.forEach(transaction => {
    addRowToTable(transaction, table);
  });
  location.href = "./../option.html";
}

*/