function transferAppendFunction(value) {
    let transferInput = document.getElementById("transferInput");
    if (value == ".") {
        let dotCard = document.getElementById("dot-card");
        dotCard.style.backgroundColor = "lightgray";
    }
    transferInput.value += value;
}

function transferDeleteFunction() {
    let transferInput = document.getElementById("transferInput");
    let length = transferInput.value.length;
    if (length > 0) {
        if (transferInput.value.charAt(length - 1) == ".") {
            let dotCard = document.getElementById("dot-card");
            dotCard.style.backgroundColor = "rgb(241, 237, 237)";
        }
    }
    transferInput.value = transferInput.value.slice(0, -1);
}

function transferEnterFunction() {
    let transferInput = document.getElementById("transferInput");
    let transferAmount = parseFloat(transferInput.value);
    localStorage.setItem('transferAmount', JSON.stringify(transferAmount));

    let selectFromElement = document.getElementById("select_from_account");
    let selectFromAccount = selectFromElement.value;
    localStorage.setItem('selectFromAccount', JSON.stringify(selectFromAccount));

    let selectToElement = document.getElementById("select_to_account");
    let selectToAccount = selectToElement.value;
    localStorage.setItem('selectToAccount', JSON.stringify(selectToAccount));




    
    if (transferAmount > 0) {
        location.href = "./CheckTransfer/checkTransfer.html";
    }
}
function backFunction() {
    location.href = "./../option.html";
}
