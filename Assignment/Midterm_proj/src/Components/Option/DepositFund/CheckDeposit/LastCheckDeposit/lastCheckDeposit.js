function okFunction() {
    let currentBalance = JSON.parse(localStorage.getItem('currentBalance'));
    let depositAmount = JSON.parse(localStorage.getItem('depositAmount'));
    currentBalance=currentBalance+depositAmount;
    localStorage.setItem('currentBalance',JSON.stringify(currentBalance));

    kstFormatter=Intl.DateTimeFormat('en-US', { timeZone: 'Asia/Seoul', weekday: 'short', month: 'short', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: false } );
    const newTransaction = {
        date:kstFormatter.format(new Date()).replace(/,/g, '')+" GMT+0900 (Korean Standard Time)",
        fundsOut: 0,
        fundsIn: depositAmount,
        runningBalance: currentBalance
    };
    let transactions = JSON.parse(localStorage.getItem('transactions'));
    transactions.push(newTransaction);
    localStorage.setItem('transactions',JSON.stringify(transactions));

    location.href = "./../../DoneDeposit/doneDeposit.html";
}


