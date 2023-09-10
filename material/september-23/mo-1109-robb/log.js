// Funktion zum Umleiten von console.log-Ausgaben in die HTML-Div
function redirectConsoleToDiv() {
  const consoleField = document.querySelector(".console-field");

  // Speichern der ursprünglichen console.log-Funktion
  const originalConsoleLog = console.log;

  // Überschreiben der console.log-Funktion, um Ausgaben in die Div umzuleiten
  console.log = function () {
    // Konvertiere die Argumente in einen Zeichenfolgen-Text
    const logText = Array.from(arguments)
      .map((arg) =>
        typeof arg === "string"
          ? arg
          : `<span style="color: green;">${arg}</span>`
      )
      .join(" ");

    // Füge den formatierten Text in die Div ein
    consoleField.innerHTML += `<p>${logText}</p>`;

    // Aufruf der ursprünglichen console.log-Funktion
    originalConsoleLog.apply(console, arguments);
  };
}

// Aufruf der Funktion zum Umleiten der Konsole
redirectConsoleToDiv();
