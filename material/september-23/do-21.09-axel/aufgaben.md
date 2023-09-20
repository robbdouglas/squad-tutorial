# Übung: Array-Manipulation

Du sollst verschiedene Operationen zur Array-Manipulation implementieren. Erstelle ein JavaScript-Programm, das die folgenden Aufgaben erledigt:

1. Erstelle ein Array namens zahlen mit den folgenden Werten: [5, 10, 15, 20, 25].

2. Füge die Zahl 30 am Ende des zahlen-Arrays hinzu.

3. Entferne das erste Element aus dem zahlen-Array .

4. Erstelle ein neues Array namens fruechte mit den folgenden Werten: ['Apfel', 'Banane', 'Kirsche'].

5. Füge den Wert 'Dattel' am Ende des fruechte-Arrays hinzu.

6. Entferne das letzte Element aus dem fruechte-Array .

7. kombiniere die zahlen- und fruechte-Arrays in ein einziges Array namens kombiniert .

8. Kehre die Reihenfolge der Elemente im kombiniert-Array um.

9. Sortiere das kombiniert-Array in alphabetischer Reihenfolge .

10. wandle das kombiniert-Array in einen durch Kommas getrennten String um und speichere ihn in einer Variable namens ergebnis.

Gib schließlich den String ergebnis in der Konsole aus.

Dein Programm sollte diese Operationen durchführen und das endgültige Ergebnis in der Konsole ausgeben.

Bonus-Herausforderung (optional): 12. Schreibe eine Funktion namens duplikateEntfernen(arr), die ein Array arr als Parameter erhält und ein neues Array zurückgibt, aus dem doppelte Werte entfernt wurden. Verwende diese Funktion, um Duplikate aus dem kombiniert-Array zu entfernen, bevor du die übrigen Operationen durchführst.

Du kannst dein Programm gerne mit verschiedenen Eingabe-Arrays und Varianten der Aufgaben testen, um die Array-Manipulation in JavaScript weiter zu üben.

//

Aufgabe: Altersüberprüfung

Schreibe ein JavaScript-Programm, das den Benutzer nach seinem Alter fragt und dann basierend auf dem eingegebenen Alter eine Nachricht ausgibt.

Verwende dazu die readlineSync-Bibliothek, um die Benutzereingabe zu erhalten. Beachte, dass du zuerst die readlineSync-Bibliothek installieren und importieren musst.

Folgende Schritte sind zu beachten:

Installiere die readline-sync-Bibliothek, wenn sie noch nicht installiert ist:

bash
Copy code
npm install readline-sync
Schreibe den JavaScript-Code für das Programm:

Frage den Benutzer nach seinem Alter und speichere die Eingabe in einer Variablen.

Überprüfe das Alter des Benutzers:

Wenn das Alter kleiner als 18 ist, gib die Nachricht "Du bist minderjährig" aus.
Wenn das Alter zwischen 18 und 65 (einschließlich) liegt, gib die Nachricht "Du bist im erwerbsfähigen Alter" aus.
Wenn das Alter größer als 65 ist, gib die Nachricht "Du bist im Rentenalter" aus.
Gib das Ergebnis auf der Konsole aus.

Stelle sicher, dass das Programm gut kommentiert ist, und füge eine Anleitung hinzu, damit der Benutzer versteht, was er eingeben und erwarten kann.
