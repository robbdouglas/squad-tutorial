let zahl1= 40;
let zahl2= 30;

if (zahl1>zahl2){console.log("Die erste Zahl ist größer!");
} else if(zahl2>zahl1){console.log ("die erste Zahl ist kleiner");
}else {console.log ("beide Zahlen sind gleich");}

zahl1>zahl2? console.log("die erste Zahl ist größer"): zahl1<zahl2 ? console.log("die erste zahl ist kleiner") : console.log("beide Zahlen sind gleich");


//2

let zahl = Math.round (Math.random() *100);
console.log(zahl);

if (zahl<50){console.log("F");
} else if (zahl<70){console.log("D");
}else if (zahl<80){console.log("C");
}else if (zahl<90){console.log("B");
} else {console.log("A")} 

//3

let Milch = "ja";
let Eier = "ja";
let Brot = "ja";


if (Milch === "ja" || Brot === "ja" || Eier === "ja") {
    if (Milch === "ja") {
       console.log("Milch");
    }
    if (Brot === "ja") {
        console.log("Brot");
    }
    if (Eier === "ja") {
        console.log("Eier");
    } 
}

/* const milch = "ja";
const brot = "ja";
const eier = "nein";


const einkaufsliste = [];

if (milch === "ja" || brot === "ja" || eier === "ja") {
    if (milch === "ja") {
        einkaufsliste.push("Milch");
    }
    if (brot === "ja") {
        einkaufsliste.push("Brot");
    }
    if (eier === "ja") {
        einkaufsliste.push("Eier");
    }

    console.log("Ihre Einkaufsliste enthält:");
      
        console.log(einkaufsliste);
    }
 else {
    console.log("Ihre Einkaufsliste ist leer.");
} */
   