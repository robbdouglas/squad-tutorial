Aufgabe: Asynchrones Programmieren und Promises

Teil 1: Synchron vs. Asynchron (Blocking vs. Non-blocking)

Frage 1.1: Erkläre den Unterschied zwischen synchronem und asynchronem Code. Warum wird synchroner Code auch als "Blocking" bezeichnet?

Antwort 1.1: Synchroner Code wird zeilenweise ausgeführt und jeder Schritt muss auf die Fertigstellung des vorherigen Schritts warten, was als "Blocking" bezeichnet wird. Asynchroner Code ermöglicht es, Aufgaben unabhängig vom Hauptprogrammfluss auszuführen.

Teil 2: async und defer Attribute

Frage 2.1: Was bewirken die async und defer Attribute beim Einbinden von externen Skripten in eine HTML-Datei? Nenne jeweils eine Situation, in der jedes der Attribute nützlich sein könnte.

Antwort 2.1: Das async-Attribut ermöglicht das asynchrone Laden eines Skripts, während die Seite weiterhin geladen wird. Das defer-Attribut bewirkt, dass das Skript erst dann ausgeführt wird, wenn der Parsvorgang des HTML-Dokuments abgeschlossen ist.

Teil 3: Promises

Frage 3.1: Was ist das Hauptziel von Promises? Erkläre die drei möglichen Zustände eines Promise und was sie bedeuten.

Antwort 3.1: Das Hauptziel von Promises ist es, eine strukturierte Möglichkeit zur Bewältigung von asynchronem Code bereitzustellen. Die drei möglichen Zustände sind "Pending" (ausstehend), "Fulfilled" (erfolgreich abgeschlossen) und "Rejected" (fehlgeschlagen).

Frage 3.2: Schreibe den grundlegenden Syntax für die Erstellung eines Promises. Füge Kommentare hinzu, um zu erklären, welche Aufgaben im resolve- und reject-Block ausgeführt werden sollen.

new Promise((resolve, reject) => {
// some asynchronous code
if (successful) {
resolve(); // Aufruf, wenn erfolgreich
} else {
reject(); // Aufruf, wenn nicht erfolgreich
}
})

Frage 3.3: Wie können Promise-Objekte mit .then() und .catch() behandelt werden? Gib Beispiele für die Verwendung dieser Methoden.

Promise .then((result => {console.log(result)}))
.catch((error => {console.log(error)}))

Teil 4: fetch

Frage 4.1: Erkläre kurz, was die fetch-Methode in JavaScript macht und welche Art von Objekt sie zurückgibt.

Antwort 4.1: Die fetch-Methode startet den Prozess zum Abrufen von Ressourcen von einem Server. Sie gibt ein Promise zurück, das sich in einen Response auf diese Anfrage auflöst.

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
