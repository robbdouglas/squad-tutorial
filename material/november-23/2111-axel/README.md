Aufgabe: Asynchrones Programmieren und Promises

Teil 1: Synchron vs. Asynchron (Blocking vs. Non-blocking)

Frage 1.1: Erkläre den Unterschied zwischen synchronem und asynchronem Code. Warum wird synchroner Code auch als "Blocking" bezeichnet?
Teil 2: async und defer Attribute

Frage 2.1: Was bewirken die async und defer Attribute beim Einbinden von externen Skripten in eine HTML-Datei? Nenne jeweils eine Situation, in der jedes der Attribute nützlich sein könnte.
Teil 3: Promises

Frage 3.1: Was ist das Hauptziel von Promises? Erkläre die drei möglichen Zustände eines Promise und was sie bedeuten.

Frage 3.2: Schreibe den grundlegenden Syntax für die Erstellung eines Promises. Füge Kommentare hinzu, um zu erklären, welche Aufgaben im resolve- und reject-Block ausgeführt werden sollen.

Frage 3.3: Wie können Promise-Objekte mit .then() und .catch() behandelt werden? Gib Beispiele für die Verwendung dieser Methoden.

Teil 4: fetch

Frage 4.1: Erkläre kurz, was die fetch-Methode in JavaScript macht und welche Art von Objekt sie zurückgibt.

//////

Erstelle eine Funktion namens loadData, die eine externe Datenquelle (data.txt) mithilfe von fetch abruft und ein Promise zurückgibt.

In der Promise-Implementierung sollst du:

Den Erfolgsfall (resolve) simulieren, indem du die Daten aus data.txt als Text zurückgibst.
Den Fehlerfall (reject) simulieren, wenn der Serverstatus nicht "OK" ist. Du kannst den Serverstatus überprüfen, indem du response.ok verwendest.
Schreibe eine zweite Funktion namens processData, die das Promise von loadData verwendet und die Daten folgendermaßen verarbeitet:

Teile die Textdaten in Zeilen auf und erstelle ein Array, wobei jede Zeile zu einem Array-Element wird.
Sortiere das Array alphabetisch.
Gib das sortierte Array zurück.
Rufe processData auf, wenn der Benutzer auf einen Button klickt (button). Gib die sortierten Daten in einer ungeordneten Liste (ul) auf der Webseite aus.

Hinweis: Du kannst new Promise, .then(), .catch(), und fetch verwenden, um die Aufgaben zu erfüllen.
