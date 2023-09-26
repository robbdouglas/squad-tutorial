// ARRAYS---------------------------------------------------

// ### Aufgabe 1: Array verwalten

// Du hast ein Array von Zahlen: [1, 2, 3, 4, 5]. Schreibe eine JavaScript-Funktion, die folgende Aufgaben erledigt:

// [a] Füge der Array am Ende die Zahl 6 hinzu!
// [b] Entferne die Zahl 3 aus dem Array!
// [c] Entferne die letzte Zahl aus dem Array!
// [d] Überprüfe, ob die Zahl 5 im Array vorhanden ist und gebe eine entsprechende Meldung aus!

// ### Aufgabe 2: Array transformieren

// Du hast ein Array von Namen: ["Alice", "Bob", "Charlie", "David"]. Schreibe eine JavaScript-Funktion, die folgende Aufgaben erledigt:

// [a] Erstelle ein neues Array, das nur die Namen enthält, die kürzer als 5 Buchstaben sind.
// [b] Verändere das ursprüngliche Array, indem du den Namen "Eve" am Anfang hinzufügst.
// [c] Verwende die .join()-Methode, um die Namen im Array in einen einzigen String zu konvertieren und auf der Konsole auszugeben.

// FOR LOOPS------------------------------------------------

// ### Aufgabe 1: 

// Nutze for loops, um die die folgenden Zahlenreihen in der Konsole auszugeben:

// [a] 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 <br>
// [b] 59, 58, 57, 56, 55, 54, 53, 52, 51 <br>
// [c] 0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100 <br>
// [d] 1, 2, 4, 8, 16, 32, 64, 128, 256 <br>
// [e] 4, 2, 1, 0.5, 0.25, 0.125 <br>

// ### Aufgabe 2: 

// Schreibe mit Hilfe eines for loops eine Art Tabelle, die die Quadratzahlen von 1 bis zu einer gegebenen Anzahl von Zeilen enthält und in der Konsole ausgibt. Die Tabelle soll so aussehen:

// 1    1 <br>
// 2    4 <br>
// 3    9 <br>
// [...] <br>
// 10     100    <br>

// ### Aufgabe 3:

// Nutze for loops, um folgendes Programm zu schreiben: Ein 6-seitiger Würfel soll 10 mal geworfen werden. Lass dir die geworfenen Zahlen in der Konsole in einem Array ausgeben. <br>

// [a] Die Summe der geworfenen Zahlen soll ausgegeben werden. <br>
// [b] Die Anzahl der geworfenen Sechsen soll ausgegeben werden. <br>
// [c] Es soll überprüft werden, ob mindestens eine 1 geworfen wurde. <br>

// ARRAYS---------------------------------------------------

// Aufgabe 1

//a

let zahlen = [1, 2, 3, 4, 5];

zahlen.push(6);
console.log(zahlen);

//b

zahlen.splice(2, 1);
console.log(zahlen);

//c

zahlen.pop();
console.log(zahlen);

//d

if (zahlen.includes(5)) {
    console.log("5 ist im Array vorhanden");
}
else {
    console.log("5 ist nicht im Array vorhanden");
}

//Aufgabe 2

let kurzeNamen = ["Alice", "Bob", "Charlie", "David"];

console.log(kurzeNamen);

//a

kurzeNamen.unshift("Eve");
console.log(kurzeNamen);

//b

let kurzeNamenString = kurzeNamen.join(", ");
console.log(kurzeNamenString);


// FOR LOOPS------------------------------------------------

// Aufgabe 1

//a

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

//b

for (let i = 59; i >= 51; i--) {
    console.log(i);
}

//c

for (let i = 0; i <= 100; i += 10) {
    console.log(i);
}

//d

for (let i = 1; i <= 256; i *= 2) {
    console.log(i);
}

//e

for (let i = 4; i >= 0.125; i /= 2) {
    console.log(i);
}

//Aufgabe 2

let zeile = 10;
for (let i = 1; i <= zeile; i++) {
    console.log(i + " " + i * i);
}

//Aufgabe 3

//a 

let summe = 0;
let wuerfel = [];

for (let i = 1; i <= 10; i++) {
    let wurf = Math.floor(Math.random() * 6 + 1);
    wuerfel.push(wurf);
    summe += wurf;
}

console.log(wuerfel);
console.log(summe);

//b

let sechser = 0;

for (let i = 0; i < wuerfel.length; i++) {
    if (wuerfel[i] === 6) {
        sechser++;
    }
}

console.log(wuerfel);
console.log(sechser);

//c

let eins = false;

for (let i = 0; i < wuerfel.length; i++) {
    if (wuerfel[i] === 1) {
        eins = true;
    }
}

console.log(wuerfel);
console.log(eins);

// BONUS:

let namen = ["Robb", "Melisa", "Katharina", "Marvin", "Melle", "Anna", "Hamze", "Oliver", "Emanuela", "Axel"];
let kurzeNamen2 = [];

for (let i = 0; i < namen.length; i++) {
    if (namen[i].length < 5) {
        kurzeNamen2.push(namen[i]);
    }
}

console.log(kurzeNamen2);



