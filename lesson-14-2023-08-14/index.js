
// Write a JavaScript program to check if a given string is a palindrome. A palindrome is a word that is spelled the same backwards, for instance “kayak”. 

// define given string
let givenString = "bob";

// reverse the given string
let reversedString = givenString.split("").reverse().join("");

// check if the reversed string is equal to the given string
if (givenString === reversedString) {
    console.log(true);
} else {
    console.log(false);
}

// Write a JavaScript program to find the closest value to 100 from two numerical values. 

// define and set array of two numbers

let nums = [
    12,
    120
]

// define array of difference between the numbers and 100.

let numDifs = [];

for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 100) {
        numDifs.push(nums[i] - 100);
    } else if (nums[i] < 100) {
        numDifs.push(100 - nums[i])
    } else {
        numDifs.push(0);
    }
}

if (numDifs[0] > numDifs[1]) {
    console.log("Second number is closest to 100.");
} else if (numDifs[1] > numDifs[0]) {
    console.log("First number is closest to 100.");
} else {
    console.log("They are both as close");
}

// Write a JavaScript program to capitalize the first letter of each word in a given string.

const stringToCapitalize = "arsenal is the best football team";

const words = stringToCapitalize.split(" ");

let capitalizedWords = [];
for (const word of words) {
    let restOfWord = word.substring(1);
    let capitalizedFirstLetter = word[0].toUpperCase();
    capitalizedWords.push(capitalizedFirstLetter + restOfWord);
}

console.log(capitalizedWords.join(" "));


/*
Write a JavaScript program to check whether 1 appears in the first or last position of a given array of integers. 
The array length must be larger than or equal to 1. 
*/

const givenNums = [1, 4, 7, 8, 1];

if (givenNums[0] == 1 || givenNums[givenNums.length - 1] == 1) {
    console.log(true);
} else {
    console.log(false);
}


// Write a JavaScript program to find the longest string from a given array of strings. 

const givenStrings = [
    "pizza",
    "iphone",
    "coffee",
    "flag"
];

let longestStrings = [];
for (const string of givenStrings) {
    if (longestStrings.length > 0) {
        if (string.length > longestStrings[0].length) {
            longestStrings = [];
            longestStrings.push(string);
        } else if (string.length == longestStrings[0].length) {
            longestStrings.push(string);
        }
    } else {
        longestStrings.push(string);
    }
}

console.log(longestStrings);