Aufgabe: Altersüberprüfung

Schreibe ein JavaScript-Programm, das den Benutzer nach seinem Alter fragt und dann basierend auf dem eingegebenen Alter eine Nachricht ausgibt.

Verwende dazu die readlineSync-Bibliothek, um die Benutzereingabe zu erhalten. Beachte, dass du zuerst die readlineSync-Bibliothek installieren und importieren musst.

Folgende Schritte sind zu beachten:

Installiere die readline-sync-Bibliothek, wenn sie noch nicht installiert ist:

Copy code
npm install readline-sync

const readline = require('readline-sync');
Schreibe den JavaScript-Code für das Programm:

Frage den Benutzer nach seinem Alter und speichere die Eingabe in einer Variablen.

Überprüfe das Alter des Benutzers:

Wenn das Alter kleiner als 18 ist, gib die Nachricht "Du bist minderjährig" aus.
Wenn das Alter zwischen 18 und 65 (einschließlich) liegt, gib die Nachricht "Du bist im erwerbsfähigen Alter" aus.
Wenn das Alter größer als 65 ist, gib die Nachricht "Du bist im Rentenalter" aus.
Gib das Ergebnis auf der Konsole aus.

Stelle sicher, dass das Programm gut kommentiert ist, und füge eine Anleitung hinzu, damit der Benutzer versteht, was er eingeben und erwarten kann.
