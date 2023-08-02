// Loggin to the console

console.log('Hello, world!');

// # Variables

let firstName = 'Bob';

firstName = 'Mary';

console.log(firstName);

const lastName = 'Garland';

console.log(lastName);

// # Data types

let age = 30; // Integer Literal
let fullName = 'Nils Garland'; // String Literal
let isOfAge = true; // Boolean Literal
let handsome; // undefined
let nothing = null; // null


// # String Manipulation

let favoriteTeam = 'Arsenal';

// Concatenation
console.log('My favorite team is ' + favoriteTeam);

// Template 
console.log(`The best team is ${favoriteTeam} in the world.`);

// Mathematics

let addition = 3 + 6;

console.log(addition);
console.log(10 - 4);
console.log(3 * 6);
console.log(4 / 2);

// Arrays

let fruits = ['Apple', 'Banana', 'Pear', 'Orange'];

console.log(fruits[0]);

fruits.splice(3, 1);

fruits.push("avocado");

console.log(fruits);

// Objects

let person = {
    name: 'Anakin',
    age: 21,
    isJedi: true
};

// Dot notation
console.log(person.name);

// Bracket notation
let theKey = "name";
console.log(person[theKey]);

person.name = "Yoda";
console.log(person.name);

person["swordColor"] = "green";

console.log(person.swordColor);

// # Loops

// For loop

for (let i = 0; i < 5; i++) {
    console.log("It ran!");
}

// While

let i = 0;
while (i < 5) {
    console.log("Ran in while loop");
    i++;
}

// Mapping arrays

let ages = [21, 43, 14, 90, 50];
ages.map(age => console.log(age));

// Conditionals 

let userAge = 1;

if (userAge > 12 && userAge < 19) {
    console.log("Congrats! You have access.");
} else if (userAge === 0) {
    console.log("How are you even here.");
} else {
    console.log("Sorry, you do not.");
}

// Functions

function greet(name) {
    if (name) {
        console.log("Hello, " + name);
    } else {
        console.log("You really should pass a name!");
    }
}

greet("Nils");
greet();

// Classes

class Dog {
    constructor(name) {
        this.name = name;
    }

    walk() {
        console.log("The dog is walking!");
    }

}

let dog = new Dog("Theo");
dog.walk();
