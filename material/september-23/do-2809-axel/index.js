function firstAndLastCharacter(inputString){
    if (inputString.length===0){
        return "";}
        /* else {const firstChar = inputString.charAt(0);
        const lastChar=inputString.slice(inputString.length-1);
    return firstChar+ lastChar ;} */

    else {return inputString[0] + inputString[inputString.length-1]}
}




    
    console.log(firstAndLastCharacter("")); // ""
    console.log(firstAndLastCharacter("table")); // te
    console.log(firstAndLastCharacter("cat")); // ct
    console.log(firstAndLastCharacter("js")); // js

    //4

    function fillArray ( length, string) {
        let array = [];
        for (let i =0; i < length; i++){
            array.push(string);
        }
        return array;
    }

    console.log(fillArray(3, "*")); // [ '*', '*', '*' ]
console.log(fillArray(5, "a")); // [ 'a', 'a', 'a', 'a', 'a' ]
console.log(fillArray(0, "+")); // []
console.log(fillArray(10, "-")); // [ '-', '-', '-', '-', '-', '-', '-', '-', '-', '-' ]

// 6

function containsVowel (string) {
    string = string.toLowerCase();
    let vowels = ["a", "e", "i", "o", "u"];
    for (i=0; i<string.length; i++){
        if (vowels.includes(string[i])) {
            return true;
        }
    }
    return false;
}



console.log(containsVowel("table")); // true
console.log(containsVowel("bcdfg")); // false
console.log(containsVowel("a")); // true
console.log(containsVowel("aeiou")); // true
console.log(containsVowel("AEIOU")); // true
console.log(containsVowel("")); // false
console.log(containsVowel("Abc")); // true