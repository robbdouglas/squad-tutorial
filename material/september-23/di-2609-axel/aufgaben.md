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

// Aufgabe 4 von gestern

# Loop array with input

## Task 1

- Pass a series of arguments from the command line
- use a loop to output them all to the console

For example:

```plaintext
> node task-1.js one two three

// Output:
one
two
three

> node task-1.js one two three four five

// Output:
one
two
three
four
five
```

## Task 2 - Accumulator pattern: sum numbers

- Pass a series of numberical arguments to the script
- print the sum of the arguments you passed

For example:

```plaintext
> node task-2.js 1 2 3
6

> node task-2.js 10
10

> node task-2.js -1 -2 -3
-6

> node task-2.js 10 20 45
75
```

## Task 3

- Pass a series of string arguments from the terminal
- concatenate them together to print a message like: `Things to buy: tomatoes, cheese, oil`

For example:

```plaintext
> node task-3.js tomatoes cheese oil
Things to buy: tomatoes, cheese, oil

> node task-3.js apples bananas
Things to buy: apples, bananas
```

## Task 4

- Pass a series of string arguments from the terminal
- print only the initial for each one of them

For example:

```plaintext
> node task-4.js hammock elf lemon lost orange
hello

> node task-4.js list onion lock
lol
```

## Task 5

- Pass a series of numerical arguments from the terminal
- output to the console only numbers that are greater than or equal to 6

For example:

```plaintext
> node task-5.js 8 2 4 8 6 10
8
8
6
10
```

## Task 6

- Pass a series of string arguments from the terminal
- output to the console only strings that are longer than 5 characters

For example:

```plaintext
> node task-5.js cat dinosaur giraffe horse dog
dinosaur
giraffe
```
