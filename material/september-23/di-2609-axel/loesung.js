const readline = require('readline-sync');

let age = readline.question("Wie alt bist du?");

if (age < 18) { 
    console.log("du bist minderjährig");}
    else if  ( age >= 18 && age < 65 ) {console.log("Du bist im erwerbsfähigen Alter");}
    else {console.log("Du bist im Rentenalter");}
