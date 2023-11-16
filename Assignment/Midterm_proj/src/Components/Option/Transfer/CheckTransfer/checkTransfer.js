let transferElement = document.getElementById('transferAmount');
let transferAmount = JSON.parse(localStorage.getItem('transferAmount'));
transferElement.textContent = transferAmount;

let selectFromElement = document.getElementById('selectFromAccount');
let selectFromAccount = JSON.parse(localStorage.getItem('selectFromAccount'));
selectFromElement.textContent = selectFromAccount;

let selectToElement = document.getElementById('selectToAccount');
let selectToAccount = JSON.parse(localStorage.getItem('selectToAccount'));
selectToElement.textContent = selectToAccount;

function noFunction() {
    location.href = "./../transfer.html";
}

function yesFunction() {
    let currentBalance = JSON.parse(localStorage.getItem('currentBalance'));
    if(currentBalance-transferAmount<0){
        alert("Not enough money!");
        return;
    }
    currentBalance=currentBalance-transferAmount;
    localStorage.setItem('currentBalance',JSON.stringify(currentBalance));

    kstFormatter=Intl.DateTimeFormat('en-US', { timeZone: 'Asia/Seoul', weekday: 'short', month: 'short', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: false } );
    const newTransaction = {
        date:kstFormatter.format(new Date()).replace(/,/g, '')+" GMT+0900 (Korean Standard Time)",
        fundsOut: transferAmount,
        fundsIn: 0,
        runningBalance: currentBalance
    };
   
    let transactions = JSON.parse(localStorage.getItem('transactions'));
    transactions.push(newTransaction);
    localStorage.setItem('transactions',JSON.stringify(transactions));


    location.href = "./../DoneTransfer/doneTransfer.html";
}
