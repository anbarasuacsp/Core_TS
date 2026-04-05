// Type Assertion it does not change run time behaviour, Only helps the compiler

// as syntax - Precondition - We dont know the outcome data type of someValue
let someValue: any = true;  // data type would be any

if (typeof someValue === "string") {
    let strLength: number = (someValue as string).length;  // If profivede data is string that should get the length of the string
    console.log(strLength); // Output: 16
    }   else if (typeof someValue === "number") {       
        let numlength: number = (someValue as number).toString().length; // If provided data is number that should get the length of the number
        console.log(numlength); // Output: 4
    } else if (typeof someValue === "boolean") {
        let boolValue: boolean = someValue as boolean; // If provided data is boolean that should get the boolean value
        console.log(boolValue); // Output: true    
    } else {
        console.log("Unknown type");
    }  

    // Angle-bracket syntax - Precondition - We dont know the outcome data type of someValue

    // let someValue2: any = "Hello, TypeScript!"; // data type would be any       
    // if (typeof someValue2 === "string") {
    //     let strLength2: number = (<string>someValue2).length; // If provided data is string that should get the length of the string    

    //     console.log(strLength2); // Output: 16
    // } else if (typeof someValue2 === "number") {
    //     let numlength2: number = (<number>someValue2).toString().length; // If provided data is number that should get the length of the number
    //     console.log(numlength2); // Output: 4
    // } else if (typeof someValue2 === "boolean") {
    //     let boolValue2: boolean = <boolean>someValue2; // If provided data is boolean that should get the boolean value
    //     console.log(boolValue2); // Output: true    
    // } else {
    //     console.log("Unknown type");
    // }

//When to use type script type assertions
// When you know more than typescript
let someValue3: any = "Hello, TypeScript!";
let strLength3: number = (someValue3 as string).length; 
console.log(strLength3); // Output: 16

// Working with DOM elements - React developers
// const inputElement = document.getElementById("myInput") as HTMLInputElement;
// if (inputElement) {
//     console.log(inputElement.value); // Accessing the value property of the input element
// }

// Narrowing union types


// Example for To Fixed
function divide(a: number, b: number): any {
    return a / b;
}

console.log(divide(999, 22).toFixed(4)); // Output: 4.5




function processValue(value: string | number) {
    if (typeof value === "string") {
        console.log((value as string).toUpperCase()); // Type assertion to treat value as a string
    } else {
        console.log((value as number).toFixed(1)); // Type assertion to treat value as a number
    }       
}

processValue(4);