"use strict";
let age = 12;
let fullName = "Nils Garland";
let isOfAge = false;
let something = 3;
something = "hello";
let teams = ["Arsenal", "Real Madrid", "Bayern Munich"];
let address = "ASDF lane 7";
let greeting = "3";
let somethingElse = greeting;
const setUser = (id, name, admin) => {
    return {
        id: id,
        name: name,
        admin: admin ? admin : false
    };
};
const user = setUser(3, "Bob");
console.log(user);
const users = [{ id: 3, name: "hello" }];
class Person {
    constructor(name) {
        this.name = name;
    }
}
const peter = new Person("Peter");
function HelloWorld({ name }) {
    return name;
}
console.log(peter);
