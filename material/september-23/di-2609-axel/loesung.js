/* const readline = require('readline-sync');

let age = readline.question("Wie alt bist du?");

if (age < 18) { 
    console.log("du bist minderjährig");}
    else if  ( age >= 18 && age < 65 ) {console.log("Du bist im erwerbsfähigen Alter");}
    else {console.log("Du bist im Rentenalter");} */

// Aufgabe von gestern
//1
/* const args = process.argv.slice(2);

for (let i = 0; i < args.length; i++)
{console.log(args[i]);} */

//2
const args1 =process.argv.slice(2);

let sum = 0;
for (let i = 0; i < args1.length; i++)
{sum += Number(args1[i]);}
console.log(sum);




