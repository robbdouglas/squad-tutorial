// function to redirect console.log to div
function redirectConsoleToDiv() {
  const consoleField = document.querySelector(".console-field");

  // save the original console.log function
  const originalConsoleLog = console.log;

  // overwrite console.log function
  console.log = function () {
    // convert all arguments to an array
    const logText = Array.from(arguments)
      .map((arg) =>
        typeof arg === "string"
          ? arg
          : `<span style="color: green;">${arg}</span>`
      )
      .join(" ");

    // pass the log text to the div
    consoleField.innerHTML += `<p>${logText}</p>`;

    // call the original console.log function
    originalConsoleLog.apply(console, arguments);
  };
}

// redirect console.log to div
redirectConsoleToDiv();