useContext:

Erklärung:
useContext wird verwendet, um den Wert eines React-Kontexts in einer Funktionskomponente abzurufen. Der Kontext ermöglicht es, Daten durch den Komponentenbaum zu übergeben, ohne Props auf jeder Ebene manuell weitergeben zu müssen.

Beispiel:

jsx
Copy code
import React, { createContext, useContext } from 'react';

// Einen Kontext erstellen
const MeinKontext = createContext();

// Komponente für den Kontext-Provider
const MeinProvider = ({ children }) => {
const kontextWert = "Hallo aus dem Kontext!";
return <MeinKontext.Provider value={kontextWert}>{children}</MeinKontext.Provider>;
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

// useState:

Erklärung:
useState wird verwendet, um Zustandsvariablen in Funktionskomponenten hinzuzufügen. Es gibt ein Array mit zwei Elementen zurück: den aktuellen Zustand und eine Funktion, mit der Sie ihn aktualisieren können.

Beispiel:

jsx
Copy code
import React, { useState } from 'react';

const Zaehler = () => {
// Eine Zustandsvariable mit dem Namen "count" und einem Anfangswert von 0 deklarieren
const [count, setCount] = useState(0);

return (

<div>
<p>Zähler: {count}</p>
<button onClick={() => setCount(count + 1)}>Inkrementieren</button>
</div>
);
};

export default Zaehler;

// useEffect:

Erklärung:
useEffect wird für Seiteneffekte in Funktionskomponenten verwendet. Es ermöglicht Ihnen, Operationen wie das Abrufen von Daten, Abonnements oder das manuelle Ändern des DOM auf eine Weise durchzuführen, die den React-Komponentenlebenszyklus nicht beeinträchtigt.

Beispiel:

jsx
Copy code
import React, { useState, useEffect } from 'react';

const DatenAbruf = () => {
const [data, setData] = useState(null);

useEffect(() => {
// Daten abrufen, wenn die Komponente montiert wird
const fetchData = async () => {
const response = await fetch('https://api.example.com/data');
const result = await response.json();
setData(result);
};

    fetchData();

    // Aufräumfunktion (optional) - wird ausgeführt, wenn die Komponente demontiert wird
    return () => {
      console.log('Komponente wurde demontiert');
    };

}, []); // Das leere Abhängigkeitsarray bedeutet, dass der Effekt nur einmal beim Mounten ausgeführt wird

return (

<div>
{data ? (
<p>Daten: {data}</p>
) : (
<p>Daten werden geladen...</p>
)}
</div>
);
};

export default DatenAbruf;

// createContext:

createContext ist eine Funktion in React, die dazu verwendet wird, einen sogenannten Kontext zu erstellen. Ein Kontext ermöglicht es, Werte wie Themes, Authentifizierungsstatus oder andere Konfigurationsdaten durch die Komponenten-Hierarchie zu übermitteln, ohne dass jeder Zwischenelement diese als Props weiterreichen muss.

Hier ist eine Erklärung und ein Beispiel für die Verwendung von createContext:

createContext:

Erklärung:
createContext erstellt einen Kontext mit einem Anfangswert (default value) und gibt ein Objekt mit einem Provider und einem Consumer zurück. Der Provider wird in einer übergeordneten Komponente verwendet, um den Kontextwert zu setzen, und der Consumer wird in darunter liegenden Komponenten verwendet, um auf den Wert zuzugreifen.
Beispiel:

jsx
Copy code
import React, { createContext, useContext } from 'react';

// Ein Kontext erstellen mit einem Anfangswert (default value)
const ThemeContext = createContext('light');

// Komponente, die den Kontext verwendet
const ThemedComponent = () => {
// Den Kontextwert abrufen
const theme = useContext(ThemeContext);

return (

<div style={{ background: theme === 'light' ? '#ffffff' : '#333333', color: theme === 'light' ? '#000000' : '#ffffff' }}>
<p>Aktuelles Theme: {theme}</p>
</div>
);
};

// Komponente, die den Kontext-Provider verwendet
const ThemeProvider = ({ children }) => {
// Den Kontextwert setzen
const themeValue = 'dark';

return (
<ThemeContext.Provider value={themeValue}>
{children}
</ThemeContext.Provider>
);
};

// Hauptanwendung
const App = () => (
<ThemeProvider>
<ThemedComponent />
</ThemeProvider>
);

export default App;

In diesem Beispiel wird ein Kontext mit dem Namen ThemeContext erstellt und initial mit dem Wert 'light' versehen. Die ThemedComponent-Komponente greift auf diesen Kontext zu und verwendet den aktuellen Wert, um das Erscheinungsbild der Komponente basierend auf dem ausgewählten Theme zu ändern. Die ThemeProvider-Komponente setzt den Kontextwert auf 'dark' und umhüllt die ThemedComponent mit dem ThemeContext.Provider. Dadurch wird der Kontextwert für alle untergeordneten Komponenten innerhalb des ThemeProvider-Bereichs auf den neuen Wert 'dark' gesetzt.
