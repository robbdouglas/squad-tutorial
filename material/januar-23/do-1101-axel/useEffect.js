import React, { useState, useEffect } from "react";

const DatenAbruf = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Daten abrufen, wenn die Komponente montiert wird
    const fetchData = async () => {
      const response = await fetch("https://api.example.com/data");
      const result = await response.json();
      setData(result);
    };

    fetchData();

    // Aufräumfunktion (optional) - wird ausgeführt, wenn die Komponente demontiert wird
    return () => {
      console.log("Komponente wurde demontiert");
    };
  }, []); // Das leere Abhängigkeitsarray bedeutet, dass der Effekt nur einmal beim Mounten ausgeführt wird

  return (
    <div>{data ? <p>Daten: {data}</p> : <p>Daten werden geladen...</p>}</div>
  );
};

export default DatenAbruf;
