let age: number = 12;
let fullName: string = "Nils Garland";
let isOfAge: boolean = false;
let something: any = 3;

something = "hello";

let teams: string[] = ["Arsenal", "Real Madrid", "Bayern Munich"];

let address: string | string[] = "ASDF lane 7";

let greeting: any = "3";
let somethingElse: number = <number>greeting;

type User = {
    id: number,
    name: string,
    admin?: boolean
};

const setUser = (id: number, name: string, admin?: boolean): User => {
    return {
        id: id,
        name: name,
        admin: admin ? admin : false
    };
}; 

const user: User = setUser(3, "Bob");

console.log(user);

const users: User[] = [{ id: 3, name: "hello" }];

interface NameInterface {
    name: string
}

class Person implements NameInterface {
    name: string

    constructor (name: string) {
        this.name = name
    }

}

const peter = new Person("Peter");

function HelloWorld({ name }: NameInterface) {
    return name;
}

console.log(peter);



