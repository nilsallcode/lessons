// Write a JavaScript program to remove a character at the specified position in a given string and return the modified string

let givenString = "JavaScript";
let charIndex = 3;

let stringStart = givenString.substring(0, charIndex);
let stringEnd = givenString.substring(charIndex + 1, givenString.length);

console.log(stringStart + stringEnd);

// Write a JavaScript program to check whether a given positive number is a multiple of 3 or 7.

let positiveNumber = 12;

if (positiveNumber % 3 == 0 || positiveNumber % 7 == 0) {
    console.log(true);
} else {
    console.log(false);
}

// Write a JavaScript program to check whether a string "Script" appears at the 5th (index 4) position in a given string. If "Script" appears in the string, return the string without "Script" otherwise return the original one.

let newString = givenString;
if (givenString.substring(10, 4) === 'Script') {
    newString = givenString.substring(0, 4) +
        givenString.substring(10, givenString.length);
}
console.log(newString);

// Write a JavaScript program that checks two integer values and returns true if either one is 15 or if their sum or difference is 15.  

let num1 = 25;
let num2 = 10;

if (
    num1 === 15 ||
    num2 === 15 ||
    num1 + num2 === 15 ||
    Math.abs(num1 - num2) === 15) {
    console.log(true);
} else {
    console.log(false);
}

// Write a JavaScript program to display the city name if the string begins with "Los" or "New" otherwise return blank.

let city = "New York";

if (city.length >= 3) {
    if (city.substring(0, 3) === "Los") {
        console.log(city);
    } else if (city.substring(0, 3) === "New") {
        console.log(city);
    }
}