export function multiply() {
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;
    const result = document.getElementById("result");
    result.innerText = Number(num1) * Number(num2);
  }
  