//Union

let value: string | boolean | number; // value can be a string, boolean, or number

value = "Hello";    
console.log(typeof value); // Output: Hello
value = 42;
console.log(typeof value); // Output: 42   

// CCypress Usage
function getData(id: number): string | null {   

    if (id === 1) {
        return "Data for ID 1";
    } else {
        return null;
    }       
}
const result = getData(1);

// Generic fuunction - reusanbility, type safety and flexibility

function identity<T>(arg: T): T {
    return arg;
}