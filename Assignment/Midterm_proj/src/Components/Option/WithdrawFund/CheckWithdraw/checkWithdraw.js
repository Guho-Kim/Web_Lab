let withdrawAmount = JSON.parse(localStorage.getItem('withdrawAmount'));
let withdrawElement = document.getElementById('withdrawAmount');
withdrawElement.textContent = withdrawAmount;


function noFunction() {
    location.href = "./../withdrawFund.html";
}

function yesFunction() {
    let currentBalance = JSON.parse(localStorage.getItem('currentBalance'));
    if(currentBalance-withdrawAmount<0){
        alert("Not enough money!");
        return;
    }
    currentBalance=currentBalance-withdrawAmount;
    localStorage.setItem('currentBalance',JSON.stringify(currentBalance));

    kstFormatter=Intl.DateTimeFormat('en-US', { timeZone: 'Asia/Seoul', weekday: 'short', month: 'short', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: false } );
    const newTransaction = {
        date:kstFormatter.format(new Date()).replace(/,/g, '')+" GMT+0900 (Korean Standard Time)",
        fundsOut: withdrawAmount,
        fundsIn: 0,
        runningBalance: currentBalance
    };
   
    let transactions = JSON.parse(localStorage.getItem('transactions'));
    transactions.push(newTransaction);
    localStorage.setItem('transactions',JSON.stringify(transactions));


    location.href = "./../DoneWithdraw/doneWithdraw.html";
}
