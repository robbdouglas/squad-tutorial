const readline = require("readline-sync");
// Benutzereingabe für die Lieblingsfarbe erfassen
const favoriteColor = readline.question("Was ist Ihre Lieblingsfarbe? ");
// Eine Nachricht mit der Lieblingsfarbe des Benutzers ausgeben
console.log(
  `Ihre Lieblingsfarbe ist ${favoriteColor}. Das ist eine großartige Wahl!`
);
