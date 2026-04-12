// Basic Function
function add(a: number, b: number): number {
    return a + b;

}

console.log(add(5, 3)); // Output: 8


// function type Infrence

function multiply(a: number, b: number): number {
    return a * b;
}

console.log(multiply(4, 6)); // Output: 24

// Function type as a variable

let greet: (name: string) => string = (name: string): string => {
    return `Hello, ${name}!`;
};

console.log(greet("Alice")); // Output: Hello, Alice!

// Optional Parameters
function greetUser(name: string): string {

    return `Hello, ${name}!`;
    
}

console.log(greetUser("Bob"));

// Default parameters
function power(base: number, exponent: number = 2): number {
    return Math.pow(base, exponent);
}  

console.log(power(5)); // Output: 25 (default exponent is 2)
console.log(power(5, 3)); // Output: 125 (exponent is provided as 3)
console.log(power(5, 0)); // Output: 1 (exponent is provided as 0)

// Rest parameters
function sum(...numbers: number[]): number {

    return numbers.reduce((total, num) => total + num, 0);
}       

console.log(sum(1, 2, 3)); // Output: 6
console.log(sum(4, 5, 6, 7)); // Output: 22

// function with Union Types
function formatValue(value: string | number): string {
    if (typeof value === "string") {
        return value.toUpperCase();
    }
    return value.toString();
}

console.log(formatValue("hello")); // Output: HELLO
console.log(formatValue(42)); // Output: 42


// Function Overloading
function combine(a: string): string;
function combine(a: number): string;
function combine():string{
    return add.toString()
}


const abt='4';
console.log(typeof abt); // Output: string
const aby=4;
console.log(typeof aby); // Output: number

// Arrow function
const  multply = (a:number, b:number):number => {
    return a*b;
}

console.log(multply(3, 7)); // Output: 21
// Void function - The function dont retuen any values that would be void function
function logMessage(message: string): void 
{
    console.log(`Log: ${message}`);

}

// Never FUnction 

function throwError(message: string): never {

    throw new Error(message);

}

// Function With Objects
type Use = {
    name: string;
    age: number;
    email: string;
}

function getuserinfo(user:User):string{
    return `Name: ${user.name}, Age: ${user.age}, Email: ${user.email}`;
}


console.log(getuserinfo({
    name: "John",
    age: 30,
    email: "john@example.com"
})); // Output: Name: John, Age: 30

// Function with Interfaces    
interface User {
    name: string;
    age: number;
    email: string;
}           
function getUserInfo(user: User): string {
    return `Name: ${user.name}, Age: ${user.age}, Email: ${user.email}`;
}       

console.log(getUserInfo({
    name: "Alice",
    age: 25,
    email: "alice@example.com"
})); // Output: Name: Alice, Age: 25, Email: alice@example.com

//main difference b/w type and interface is that type can be used to define a union or intersection type, while interface cannot. Additionally, interfaces can be extended and implemented by classes, while types cannot.

// Callback Function
function fetchData(callback: (data: string) => void): void {
    setTimeout(() => {  
        const data = "Sample data from API";
        callback(data);
    }, 2000);
}

// Generic Function
// function identity<T>(arg: T): T {
//     return arg;
// }

// Function type aliases
type StringOrNumber = string | number;

function printValue(value: StringOrNumber): void {
    console.log(value);
}       
console.log(printValue("Hello")); // Output: Hello
console.log(printValue(42)); // Output: 42

// Async Function
async function fetchDatae(): Promise<string> {
    return "data";
}

fetchDatae().then(data => console.log(data)); // Output: data