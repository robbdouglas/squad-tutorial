export function reset() {
    const num1 = document.getElementById("num1");
    const num2 = document.getElementById("num2");
    const result = document.getElementById("result");
    num1.value = "";
    num2.value = "";
    result.innerText = 0;
  }