// Generics
function identity<T>(arg: T): T {
    return      arg;
}

console.log(identity<string>("Hello")); // Output: Hello
console.log(identity<number>(42)); // Output: 42    
// Generic with Arrays
function getFirstElement<T>(arr: T[]): T | undefined {
    return arr.length > 0 ? arr[0] : undefined;
}


console.log(getFirstElement<number>([1, 2, 3])); // Output: 1
console.log(getFirstElement<string>(["a", "b", "c"])); // Output: a

// Generic with Interfaces
interface Box<T> {
    content: T;
}
function createBox<T>(content: T): Box<T> {
    return { content };
}
const numberBox = createBox<number>(123);
console.log(numberBox.content); // Output: 123
const stringBox = createBox<string>("Hello");
console.log(stringBox.content); // Output: Hello

// Generic with Classes

class Container<T> {
    private value: T;
    constructor(value: T) {
        this.value = value;
    }   

    getValue(): T {




        return this.value;
    }
}
const numberContainer = new Container<number>(42);
console.log(numberContainer.getValue());




