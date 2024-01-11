import React, { createContext, useContext } from "react";

// Einen Kontext erstellen
const MeinKontext = createContext();

// Komponente für den Kontext-Provider
const MeinProvider = ({ children }) => {
  const kontextWert = "Hallo aus dem Kontext!";
  return (
    <MeinKontext.Provider value={kontextWert}>{children}</MeinKontext.Provider>
  );
};

// Komponente, die den Kontext verwendet
const MeineKomponente = () => {
  const kontextDaten = useContext(MeinKontext);

  return <p>{kontextDaten}</p>;
};

// Die Komponente mit dem Provider umschließen
const App = () => (
  <MeinProvider>
    <MeineKomponente />
  </MeinProvider>
);

export default App;
