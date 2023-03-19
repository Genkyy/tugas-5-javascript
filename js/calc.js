function add() {
  var num1 = document.getElementById("number1").value;
  var num2 = document.getElementById("number2").value;

  // Validasi input
  if (isNaN(num1) || isNaN(num2)) {
    alert("Maaf yang Anda input bukan angka.");
    return;
  }

  var result = parseFloat(num1) + parseFloat(num2);
  document.getElementById("result").value = result;
}

function subtract() {
  var num1 = document.getElementById("number1").value;
  var num2 = document.getElementById("number2").value;

  // Validasi input
  if (isNaN(num1) || isNaN(num2)) {
    alert("Maaf yang Anda input bukan angka.");
    return;
  }

  var result = parseFloat(num1) - parseFloat(num2);
  document.getElementById("result").value = result;
}

function multiply() {
  var num1 = document.getElementById("number1").value;
  var num2 = document.getElementById("number2").value;

  // Validasi input
  if (isNaN(num1) || isNaN(num2)) {
    alert("Maaf yang Anda input bukan angka.");
    return;
  }

  var result = parseFloat(num1) * parseFloat(num2);
  document.getElementById("result").value = result;
}

function divide() {
  var num1 = document.getElementById("number1").value;
  var num2 = document.getElementById("number2").value;

  // Validasi input
  if (isNaN(num1) || isNaN(num2)) {
    alert("Maaf yang Anda input bukan angka.");
    return;
  }

  // Validasi pembagian dengan nol
  if (parseFloat(num2) === 0) {
    alert("Maaf, Anda tidak dapat melakukan pembagian dengan nol.");
    return;
  }

  var result = parseFloat(num1) / parseFloat(num2);
  document.getElementById("result").value = result;
}
