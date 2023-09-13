# Aufgaben

<b>STOP!</b> In der Datei loesungen.js findest du die Lösungen zu den beiden Aufgaben. Bitte versuche, die Aufgaben selbstständig zu lösen und die Lösungen nur zur Kontrolle zu verwenden! 

## Aufgabe 1:

Du möchtest gern auf ein Konzert gehen! Schreibe ein JavaScript-Programm, das basierend auf den gegebenen Werten <br>

- money und <br>
- priceConcertTicket <br>

eine einfache Kaufentscheidung trifft. Verwende Bedingungsanweisungen, um die folgenden Ausgaben zu generieren:

- Definiere zwei Variablen: money und priceConcertTicket und weise ihnen jeweils einen Wert zu!
- Wenn money mindestens das Doppelte von priceConcertTicket beträgt, gib aus: "Du kannst zwei kaufen!"
- Wenn money mindestens genauso viel wie priceConcertTicket beträgt, gib aus: "Du kannst es kaufen!"
- Andernfalls, wenn money weniger als der Preis ist, gib aus: "Du kannst es nicht kaufen!"
- Teste dein Programm mit verschiedenen Werten für money und priceConcertTicket, um sicherzustellen, dass es die richtigen Ausgaben basierend auf den gegebenen Bedingungen generiert.

---

## Aufgabe 2:

Nutze die beiden Variablen aus Aufgabe 1 (money und priceConcertTicket). Du möchtest überprüfen, ob du wirklich zum Konzert gehst. <br>
Definiere dazu zwei neue Variablen:

- habeBock und <br>
- habeZeit

Um zu überprüfen, ob du wirklich zum Konzert gehst, müssen ALLE drei der folgenden Bedingungen gleichzeitig erfüllt sein:

- Du musst Bock auf das Konzert haben
- Du musst Zeit für das Konzert haben
- Du musst mindestens so viel Geld besitzen, um das Ticket zu bezahlen

Wenn alle drei Bedingungen gleichzeitig erfüllt sind, gib aus: "Ich gehe zum Konzert!"
Wenn mindestens eine der Bedingungen nicht erfüllt ist, gib aus: "Ich gehe nicht zum Konzert!"

Hinweis: Nutze boolean für die Definition von habeBock und habeZeit!

---

## Aufgabe 3

Du bist dabei, ein einfaches Einkaufsportal zu erstellen. Du möchtest deinen Nutzern auf Grundlage ihres Einkaufswertes Rabatte gewähren. Schreibe JavaScript-Code, der den Einkaufswert des Nutzers überprüft und den entsprechenden Rabatt berechnet.

- Erstelle eine Variable namens einkaufswert und weise ihr einen zufälligen Wert zwischen 0 und 1000 zu.

- Verwende eine "if-else if-else"-Struktur, um den Rabatt für den Einkaufswert zu bestimmen:

- Wenn der einkaufswert weniger als 100 beträgt, beträgt der Rabatt 5%.
- Wenn der einkaufswert zwischen 100 (inklusive) und 500 (ausschließlich) liegt, beträgt der Rabatt 10%.
- Wenn der einkaufswert 500 oder mehr beträgt, beträgt der Rabatt 20%.
- Wenn keine der obigen Bedingungen erfüllt ist, beträgt der Rabatt 0%.
- Gib den einkaufswert, den berechneten Rabatt und den endgültigen Preis (nach Abzug des Rabatts) in der Konsole aus.