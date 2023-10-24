function okFunction() {
    let newTransaction=JSON.parse(localStorage.getItem('newTransaction'));
    let transactions = JSON.parse(localStorage.getItem('transactions'));
    transactions.push(newTransaction);
    localStorage.setItem('transactions',JSON.stringify(transactions));


    location.href = "./../../DoneDeposit/doneDeposit.html";
}


