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
    localStorage.setItem('depositAmount', JSON.stringify(depositAmount));
    if (depositAmount > 0) {
        location.href = "./CheckDeposit/checkDeposit.html";
    }

}
function backFunction() {
    location.href = "./../option.html";
}
