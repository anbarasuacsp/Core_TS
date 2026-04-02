// Type Script - Superset of Java Script
let message1 = "Hello World";
console.log(message1)


let message: string = "Hello World";
console.log(message);

//Basic Types

// Primitive Data Type
let age: number = 25;
let username: string = "John Doe";
let isStudent: boolean = true;


// Array
let numbers: number[] = [1, 2, 3, 4, 5];
let names: string[] = ["Alice", "Bob", "Charlie"];


console.log(numbers);
console.log(names);
 
//tuple
let person: [string, number] = ["Alice", 30];
console.log(person);

console.log('Hey karthik')


//any
let randomValue: any = 10;
console.log(randomValue);

// type inference
let count = 5; // TypeScript infers that 'count' is of type 'number'
console.log(count);

//functions
function add(a: number, b: number): number {
    return a + b;
}
console.log(add(5, 10));

// function with default parameters
function greet(name: string): string {


    return `Hello, ${name}!`;
}
console.log(greet("Karthik")); // Output: Hello, Guest!
console.log(greet("Alice")); // Output: Hello, Alice!

// Objects
let person1: { name: string; age: number } = {
    name: "Alice",
    age: 30
};
console.log(person1);

let person2: { name: string; age: number } = {
    name: "Bob",
    age: 25
};
console.log(person2);

// type alias

type Person = {
    name: string;
    age: number;
};      

let person3: Person = {
    name: "Charlie",
    age: 35
};
console.log(person3);

// Interace

interface Employee {
    id: number;
    name: string;
    department: string;
}

let employee1: Employee = {
    id: 1,
    name: "John Doe",
    department: "Engineering"
};
console.log(employee1);

// Explain difference between type alias and interface


