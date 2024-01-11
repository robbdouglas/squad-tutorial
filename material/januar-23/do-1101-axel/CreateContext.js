import React, { createContext, useContext } from "react";

// Ein Kontext erstellen mit einem Anfangswert (default value)
const ThemeContext = createContext("light");

// Komponente, die den Kontext verwendet
const ThemedComponent = () => {
  // Den Kontextwert abrufen
  const theme = useContext(ThemeContext);

  return (
    <div
      style={{
        background: theme === "light" ? "#ffffff" : "#333333",
        color: theme === "light" ? "#000000" : "#ffffff",
      }}
    >
      <p>Aktuelles Theme: {theme}</p>
    </div>
  );
};

// Komponente, die den Kontext-Provider verwendet
const ThemeProvider = ({ children }) => {
  // Den Kontextwert setzen
  const themeValue = "dark";

  return (
    <ThemeContext.Provider value={themeValue}>{children}</ThemeContext.Provider>
  );
};

// Hauptanwendung
const App = () => (
  <ThemeProvider>
    <ThemedComponent />
  </ThemeProvider>
);

export default App;
