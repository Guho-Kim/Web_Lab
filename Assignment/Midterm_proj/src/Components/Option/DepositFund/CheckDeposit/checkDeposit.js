let depositAmount = JSON.parse(localStorage.getItem('depositAmount'));
let depositElement = document.getElementById('depositAmount');
depositElement.textContent = depositAmount;


function noFunction() {
    location.href = "./../../option.html";
}

function yesFunction() {
    location.href = "./LastCheckDeposit/lastCheckDeposit.html";
}
