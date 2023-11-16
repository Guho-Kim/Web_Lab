
function appendFunction(value) {
  let accountInput = document.getElementById("accountInput");
  accountInput.value += value;
}

function deleteFunction() {
  let accountInput = document.getElementById("accountInput");
  accountInput.value = accountInput.value.slice(0, -1);
}
let count = 5;
function checkPinFunction() {
  let accountInput = document.getElementById("accountInput");
  if (accountInput.value != "1234" && count > 0) {
    alert("Incorrect PIN. You have " + count + " attemps left");
    count = count - 1;
  }
  else {
    localStorage.clear();

    kstFormatter=Intl.DateTimeFormat('en-US', { timeZone: 'Asia/Seoul', weekday: 'short', month: 'short', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: false } );
    let dateObj = kstFormatter.format(new Date()).replace(/,/g, '')+" GMT+0900 (Korean Standard Time)";
    let transactions = [
      { date: dateObj, fundsOut: 0, fundsIn: 0, runningBalance: 2000 }
    ];
    localStorage.setItem('transactions', JSON.stringify(transactions));
    localStorage.setItem('currentBalance',"2000");

    location.href = "./../Option/option.html";

  }
}
function returnFunction() {
  location.href = "./../../index.html";
}