import React, { useState } from "react";

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
