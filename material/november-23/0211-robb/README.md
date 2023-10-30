# Events, Event Listener, Dynamik und Funktionalität von Webseiten

## Aufgabe 1: DOM Manipulation und Event Listener

### Schritt 1: HTML-Grundgerüst
Fülle die HTML-Datei mit den folgenden Elementen:

- Boilerplate
- Einen Button mit der ID "myButton".
- Ein Absatz (p-Tag) mit der ID "output". Setze den Text darin auf "Klicke den Button!".

### Schritt 2: CSS und JavaScript Dateien verlinken: 

Verlinke die style.css Datei und die script.js Datei mit der index.html Datei!

### Schritt 3: CSS-Style hinzufügen
Füge ein wenig CSS hinzu, um die Seite ansprechend zu gestalten:

- Zentriere den Text.
- Gib dem Button eine angemessene Größe, Hintergrundfarbe und abgerundete Ecken.

### Schritt 4: Event Listener hinzufügen
Schreibe JavaScript-Code, um einen Event Listener für den Button mit der ID "myButton" zu erstellen. Wenn der Button geklickt wird, soll eine Funktion namens buttonClicked aufgerufen werden.

### Schritt 5: DOM-Manipulation
In der Funktion buttonClicked, manipuliere den Text im Absatz (ID "output"), ohne dabei die HTML oder CSS Datei zu ändern:

- Ändere den Text so, dass er sagt: "Wow, du hast mich gerade geklickt!".
- Die Schriftfarbe des Textes soll rot grün sein.
- Wenn der Button geklickt wird, soll er sich außerdem einmal vollständig im Kreis drehen.


## Aufgabe 2: Dynamische Inhalte einer Website - Kleines Statistik-Tool
Erstelle eine kleine Webanwendung mit einem Formular, in welches eine Zahl als Input gegeben wird. Nach dem Absenden des Formulars soll auf der linken Seite der Website eine Liste mit so vielen Zufallszahlen (ganze Zahlen zwischen 1 und 100) erscheinen, wie der Nutzer im Formular angegeben hat. Die Zufallszahlen sollen aufsteigend sortiert werden (oben in der Liste steht die kleinste gezogene Zahl, unten die größte). Auf der rechten Seite der Website sollen folgende Werte angezeigt werden: Mittelwert der Zufallszahlen, Minimum, Maximum und Median. Ein einziger (Submit-)Button soll all diese Funktionen auslösen. <br>

Bonus: Erstelle einen zweiten Button, der die Website refresht oder sowohl das Formular als auch den Output zurücksetzt!
