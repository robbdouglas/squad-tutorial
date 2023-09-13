// LÖSUNGEN


// AUFGABE 1

const money2 = 60;
const price2 = 40;

if (money2 / price2 >= 2) {
  console.log("You can buy two!");
} else if (money2 >= price2) {
  console.log("You can buy it!");
} else {
  console.log("You can't buy it!");
}

// AUFGABE 2

const habeBock = true;
const habeZeit = true;

if (habeBock && habeZeit && money2 >= price2) {
  console.log("Ich gehe zum Konzert!");
}
else {
  console.log("Ich gehe nicht zum Konzert!");
}