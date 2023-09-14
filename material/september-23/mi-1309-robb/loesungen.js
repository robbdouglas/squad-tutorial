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

// AUFGABE 3

const einkaufswert = Math.floor(Math.random() * 1000);
console.log("Einkaufswert: " + einkaufswert);

if (einkaufswert < 100) {
    console.log("Rabatt: 5%");
    console.log("Endpreis: " + (einkaufswert * 0.95).toFixed(2));
    }
else if (einkaufswert < 500) {
    console.log("Rabatt: 10%");
    console.log("Endpreis: " + (einkaufswert * 0.9).toFixed(2));
    }
else if (einkaufswert >= 500) {
    console.log("Rabatt: 20%");
    console.log("Endpreis: " + (einkaufswert * 0.8).toFixed(2));
    }
else {
    console.log("Rabatt: 0%");
    console.log("Endpreis: " + einkaufswert.toFixed(2));
    }







    