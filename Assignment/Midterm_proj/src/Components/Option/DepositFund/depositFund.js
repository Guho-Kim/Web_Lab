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

function depositEnterFunction() {
    
    let depositInput = document.getElementById("depositInput");
    let depositAmount = parseFloat(depositInput.value);
    let currentBalance = JSON.parse(localStorage.getItem('currentBalance'));
    currentBalance=currentBalance+depositAmount;
    localStorage.setItem('currentBalance',JSON.stringify(currentBalance));

    kstFormatter=Intl.DateTimeFormat('en-US', { timeZone: 'Asia/Seoul', weekday: 'short', month: 'short', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: false } );
    const newTransaction = {
        date:kstFormatter.format(new Date()).replace(/,/g, '')+" GMT+0900 (Korean Standard Time)",
        fundsOut: 0,
        fundsIn: depositAmount,
        runningBalance: currentBalance
    };
    localStorage.setItem('newTransaction',JSON.stringify(newTransaction));

    
    localStorage.setItem('depositAmount',JSON.stringify(depositAmount));
    location.href = "./CheckDeposit/checkDeposit.html";
    
}
function backFunction() {
    location.href = "./../option.html";
}
