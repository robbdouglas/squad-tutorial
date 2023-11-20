const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const result = document.getElementById("result");

document.addEventListener("click", (e) => {
  if (e.target.id === "addBtn") {
    result.innerHTML = parseFloat(input1.value) + parseFloat(input2.value);
  }
  if (e.target.id === "subtractBtn") {
    result.innerHTML = parseFloat(input1.value) - parseFloat(input2.value);
  }
  if (e.target.id === "multiplyBtn") {
    result.innerHTML = parseFloat(input1.value) * parseFloat(input2.value);
  }
  if (e.target.id === "divideBtn") {
    result.innerHTML = parseFloat(input1.value) / parseFloat(input2.value);
  }
  if (e.target.id === "moduloBtn") {
    result.innerHTML = parseFloat(input1.value) % parseFloat(input2.value);
  }
  if (e.target.id === "resetBtn") {
    result.innerHTML = "0";
    input1.value = "";
    input2.value = "";
  }
});
