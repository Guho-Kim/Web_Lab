function appendFunction(value) {
  let accountInput = document.getElementById("accountInput");
  accountInput.value += value;
}

function deleteFunction() {
  let accountInput = document.getElementById("accountInput");
  accountInput.value = accountInput.value.slice(0, -1);
}
function checkAccountFunction() {
  let accountInput = document.getElementById("accountInput");
  if (accountInput.value != "1234567890123456") {
    alert("That account number does not exist!");
  } else {
    location.href = "./Components/Pin/pin.html";
  }
}
