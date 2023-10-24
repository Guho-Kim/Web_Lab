let currentBalance = JSON.parse(localStorage.getItem('currentBalance'));
let balanceElement = document.getElementById('balance');
balanceElement.textContent = currentBalance;

function backFunction() {
  location.href = "./../option.html";
}

let transactions = JSON.parse(localStorage.getItem('transactions'));

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
const table = document.getElementById("data-table");

transactions.forEach(transaction => {
    addRowToTable(transaction, table);
});