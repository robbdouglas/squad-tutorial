# TASKS: Numbers, Strings and if-else-statements 

---

Löse die folgenden Aufgaben ohne Copilot zu nutzen!

## AUFGABE - STRINGS

<b>Zusammenfassung</b>: Dinge, die du mit JavaScript tun kannst, um Strings zu bearbeiten:

---

### Aufgabe: Verwende die oben genannten Funktionen, um die folgenden Aufgaben zu lösen:

Aufgabe 1: Berechne die Länge des folgenden Satzes und gib sie in der Konsole aus: "JavaScript ist eine mächtige Programmiersprache."

Aufgabe 2: Ändere den ersten Satz in Großbuchstaben und den zweiten Satz in Kleinbuchstaben um und gib beide in der Konsole aus:

"Hallo, wie geht es dir?"
"Gut, danke!"

Aufgabe 3: Extrahiere den Substring "mächtige" aus dem Satz "JavaScript ist eine mächtige Programmiersprache." und gib ihn in der Konsole aus.

Aufgabe 4: Ersetze alle Vorkommen von "Apfel" durch "Banane" in dem Satz "Ich esse gerne Äpfel und trinke Apfelsaft." und gib den modifizierten Satz in der Konsole aus.

Aufgabe 5: Teile den Satz "Die Sonne scheint am Himmel" in ein Array von Wörtern auf und gib das Array in der Konsole aus.

Aufgabe 6: Entferne alle Leerzeichen aus dem Satz " Dies ist ein Satz mit Leerzeichen. " und gib den bereinigten Satz in der Konsole aus.

---

## AUFGABE - NUMBERS

<b>Zusammenfassung</b>: Singe, die du mit JavaScript tun kannst, um mit Zahlen zu arbeiten:

---

### Aufgabe: Verwende die oben genannten Funktionen, um die folgenden Aufgaben zu lösen:

Aufgabe 1: Berechne den Flächeninhalt eines Rechtecks mit einer Länge von 10 Einheiten und einer Breite von 5 Einheiten.

Aufgabe 2: Ermittle den Umfang eines Kreises mit einem Radius von 8 Einheiten.

Aufgabe 3: Berechne die (Quadrat-)Wurzel aus 81.

Aufgabe 4: Gib eine gleichverteilte Zufallszahl zwischen 0 und 1 aus!

Aufgabe 5: Gib eine gleichverteilte Zufallszahl zwischen 0 und 100 aus!

Aufgabe 6: Gib eine gleichverteilte Zufallszahl zwischen 20 und 30 aus!

---

## AUFGABE - IF ELSE

### Aufgabe 1:

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

### Aufgabe 2:

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

### Aufgabe 3

Du bist dabei, ein einfaches Einkaufsportal zu erstellen. Du möchtest deinen Nutzern auf Grundlage ihres Einkaufswertes Rabatte gewähren. Schreibe JavaScript-Code, der den Einkaufswert des Nutzers überprüft und den entsprechenden Rabatt berechnet.

- Erstelle eine Variable namens einkaufswert und weise ihr einen zufälligen Wert zwischen 0 und 1000 zu.

- Verwende eine "if-else if-else"-Struktur, um den Rabatt für den Einkaufswert zu bestimmen:

- Wenn der einkaufswert weniger als 100 beträgt, beträgt der Rabatt 5%.
- Wenn der einkaufswert zwischen 100 (inklusive) und 500 (ausschließlich) liegt, beträgt der Rabatt 10%.
- Wenn der einkaufswert 500 oder mehr beträgt, beträgt der Rabatt 20%.
- Wenn keine der obigen Bedingungen erfüllt ist, beträgt der Rabatt 0%.
- Gib den einkaufswert, den berechneten Rabatt und den endgültigen Preis (nach Abzug des Rabatts) in der Konsole aus.

## AUFGABE - TERNARY OPERATOR

### Aufgabe 1 

Du schreibst ein kleines Programm zur Bewertung von Schülern. Die Schüler erhalten Noten von 1 bis 5, wobei 1 die beste Note ist und 5 die schlechteste. Schreibe JavaScript-Code, der die folgende Aufgabe löst: Wenn die Note eines Schülers kleiner oder gleich 3 ist, gib "Bestanden" aus, ansonsten gib "Durchgefallen" aus. Verwende den Ternary Operator, um dies in einer einzigen Zeile Code zu erreichen.

### Aufgabe 2 

Du entwickelst eine Einkaufs-App. Schreibe JavaScript-Code, der den Endpreis eines Produkts berechnet, basierend auf dem Nettopreis und einem Mehrwertsteuersatz. Wenn der Mehrwertsteuersatz 19% oder höher ist, gib "Hoher Steuersatz" aus, ansonsten gib "Normaler Steuersatz" aus. Verwende den Ternary Operator, um dies in einer einzigen Zeile Code zu erreichen.

### Aufgabe 3 

Nutze den Ternary Operator, um die folgende Aufgabe zu lösen: Du nimmst an einer Sportwette teil. Es spielen Dortmund gegen Bayern. Du setzt 50€ auf den Sieg von Dortmund. Die Quote beträgt 2. Wenn Dortmund gewinnt, erhältst du 100€, ansonsten verlierst du deinen Einsatz. Gib den Gewinn oder Verlust in der Konsole aus. Definiere dazu Variablen für die folgenden Werte: 
Punkte Dortmund, Punkte Bayern, Einsatz, Quote, Gewinn, Geld vor Wette, Geld nach Wette.