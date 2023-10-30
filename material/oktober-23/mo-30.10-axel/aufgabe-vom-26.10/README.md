# DOM-Traversierung: Elternliste Übung

In dieser Aufgabe lernst du, wie man das Document Object Model (DOM) durchläuft, indem du alle Elternelemente eines bestimmten Elements in HTML auflistest.

## Was du tun wirst

In dieser Übung sollst du die DOM-Traversierung in JavaScript üben. Genauer gesagt, wirst du alle Elternelemente eines gegebenen Elements in der DOM-Hierarchie abrufen. Der Zweck dieser Aufgabe besteht darin, dein Verständnis für die Eltern-Kind-Beziehungen innerhalb des DOM zu festigen und den Gebrauch von DOM-Eigenschaften und -Methoden wie `element.nodeName` und `element.parentElement` zu üben.

## Aufgaben

### Aufgabe 1 - Das 'Cite'-Element abrufen

Rufe mit JavaScript das `cite`-Element aus dem HTML-Dokument mit der Methode `querySelector` ab und speichere es in einer Variable.

### Aufgabe 2 - Elternelemente durchlaufen und speichern

Erstelle eine Schleife, die solange weiterläuft, wie das aktuelle Element einen Elternteil hat. Innerhalb dieser Schleife rufe den Knotennamen des Elements ab, konvertiere ihn in Kleinbuchstaben und füge ihn am Anfang des Arrays hinzu. Aktualisiere dann das aktuelle Element auf seinen Elternteil. Dieser Schritt stellt sicher, dass du alle Elternelemente in der richtigen Reihenfolge erfasst hast.

### Aufgabe 3 - Die Liste der Elternelemente ausgeben

Sobald du die Schleife verlassen hast, füge alle Elemente des Arrays mit der Methode `join` und ' > ' als Trennzeichen zu einem einzigen String zusammen und gib diesen String auf der Konsole aus. Wenn du alles richtig gemacht hast, solltest du eine Abfolge von Elementen in diesem Format auf der Konsole sehen: `html > body > main > section > blockquote > footer > cite`.

Denke daran, dass jede Aufgabe in dieser Übung ein Schritt auf dem Weg zum Verständnis der DOM-Traversierung in JavaScript ist. Stelle sicher, dass du jede Aufgabe verstanden hast, bevor du zur nächsten übergehst. Viel Spaß beim Programmieren!

**Zusätzliche Herausforderung:**
Kannst du deine Lösung so anpassen, dass auch die Klassen, die jedes Elternelement hat, wo zutreffend, einbezogen werden? Zum Beispiel könnte die Ausgabe so aussehen: `section.page > blockquote`.
