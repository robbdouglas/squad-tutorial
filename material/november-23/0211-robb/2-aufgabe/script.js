document.getElementById("numberForm").addEventListener("submit", function (e) {
  e.preventDefault();
  generateRandomNumbers();
});

function resetForm() {
  document.getElementById("numberForm").reset();
  document.getElementById("randomNumbers").innerHTML = "";
  document.getElementById("mean").textContent = "Mittelwert:";
  document.getElementById("min").textContent = "Minimum:";
  document.getElementById("max").textContent = "Maximum:";
  document.getElementById("median").textContent = "Median:";
}

function generateRandomNumbers() {
  const count = parseInt(document.getElementById("numberInput").value, 10);
  const randomNumbers = Array.from(
    { length: count },
    () => Math.floor(Math.random() * 100) + 1
  );
  const sortedNumbers = randomNumbers.sort((a, b) => a - b);
  displayNumbers(sortedNumbers);
  displayStatistics(sortedNumbers);
}

function displayNumbers(numbers) {
  const div = document.getElementById("randomNumbers");
  div.innerHTML = "";
  numbers.forEach((num) => {
    const numberDiv = document.createElement("div");
    numberDiv.textContent = num;
    div.appendChild(numberDiv);
  });
}

function displayStatistics(numbers) {
  const mean = numbers.reduce((acc, num) => acc + num, 0) / numbers.length;
  const min = Math.min(...numbers);
  const max = Math.max(...numbers);

  let median;
  if (numbers.length % 2 === 0) {
    const mid1 = numbers[numbers.length / 2 - 1];
    const mid2 = numbers[numbers.length / 2];
    median = (mid1 + mid2) / 2;
  } else {
    median = numbers[Math.floor(numbers.length / 2)];
  }

  document.getElementById("mean").textContent = `Mittelwert: ${mean.toFixed(
    2
  )}`;
  document.getElementById("min").textContent = `Minimum: ${min}`;
  document.getElementById("max").textContent = `Maximum: ${max}`;
  document.getElementById("median").textContent = `Median: ${median}`;
}

