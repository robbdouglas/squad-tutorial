// Write your code here
/* const form = document.getElementById("conversion-form");
const convertCountInput = document.getElementById("convert-count");
const convertFromSelect = document.getElementById("convert-from");
const convertToSelect = document.getElementById("convert-to");
const outputInput = document.getElementById("output");

document.querySelector("button").addEventListener("click", function (event) {
  event.preventDefault();
  const convertCount = convertCountInput.value;
  const convertFrom = convertFromSelect.value;
  const convertTo = convertToSelect.value;
  const url = `https://api.coinbase.com/v2/prices/${convertFrom}-${convertTo}/buy?amount=${convertCount}`;
  fetch(url)
    .then((response) => response.json())
    .then((info) => {
      outputInput.value = info.data.amount;
    });
});
 */

const form = document.getElementById("conversion-form");
const convertCountInput = document.getElementById("convert-count");
const convertFromSelect = document.getElementById("convert-from");
const convertToSelect = document.getElementById("convert-to");
const outputInput = document.getElementById("output");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const amount = parseFloat(convertCountInput.value);
  const fromCurrency = convertFromSelect.value;
  const toCurrency = convertToSelect.value;
  if (
    isNaN(amount) ||
    fromCurrency === "Choose..." ||
    toCurrency === "Choose..."
  ) {
    alert("Please enter a valid amount and select currencies.");
    return;
  }
  convertCurrency(amount, fromCurrency, toCurrency);
});
async function convertCurrency(amount, fromCurrency, toCurrency) {
  try {
    const response = await fetch(
      `https://api.coinbase.com/v2/prices/${fromCurrency}-${toCurrency}/spot`
    );
    const data = await response.json();
    if (response.ok) {
      const convertedAmount = amount * parseFloat(data.data.amount);
      outputInput.value = `${amount} ${fromCurrency.toUpperCase()} = ${convertedAmount.toFixed(
        2
      )} ${toCurrency.toUpperCase()}`;
    } else {
      throw new Error(data.errors[0].message);
    }
  } catch (error) {
    console.error("Error converting currency:", error);
    alert("An error occurred while converting currency. Please try again.");
  }
}
