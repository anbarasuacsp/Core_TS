// Interfaces - In TypeScript, interfaces are used to define the structure of an object. They can be used to describe the shape of an object, including its properties and their types.

interface User {
    name: string;
    age: number;
    email: string;
}


const user: User = {
    name: "John Doe",
    age: 30,
    email: "john.doe@example.com"
};

// Optional Parameters - In TypeScript, you can mark properties of an interface as optional using the '?' symbol. This means that the property may or may not be present in the object.

interface User1 {
    name: string;
    age: number;
    email?: string;
}

const user1: User1 = {
    name: "Jane Doe",
    age: 0
};

// Readonly Properties - You can use the 'readonly' modifier to make properties of an interface immutable. Once a value is assigned to a readonly property, it cannot be changed.

interface PNR {
    readonly id: string;
    passengerName: string;
    passengerAge: number;
};

const pnr: PNR = {
    id: "1234567890",
    passengerName: "Alice",
    passengerAge: 30
};

// function types - You can define function types using interfaces. This allows you to specify the parameters and return type of a function.
interface Add {
    (a: number, b: number): number;
}

const addNumbers: Add = (a: number, b: number): number => {
    return a + b;
};

console.log(addNumbers(5, 10));

// interface with methods - Interfaces can also include method signatures, allowing you to define the structure of objects that have methods.

interface Vehicle {     
    make: string;
    model: string;
    year: number;
    getDetails(): string;
    speedparam:null;
}

const car: Vehicle = {
    make: "Toyota",
    model: "Camry",
    year: 2020,
    getDetails(): string {
        return `${this.year} ${this.make} ${this.model}`;
    },
    speedparam: null
};

console.log(car.getDetails()); // Output: 2020 Toyota Camry

// Extanding Interfaces (Need to discussed) - You can extend interfaces to create new interfaces that inherit properties and methods from the original interface.

interface PersonDetails {
    name: string;
}

interface Employee extends PersonDetails {
    id: number;
    department: string;
}

const emp1: Employee = {
    name: "Bob",
    id: 12345,
    department: "Engineering"
};


console.log(typeof emp1);

// Mutiple inheritnce (Need to discussed)- TypeScript allows interfaces to extend multiple interfaces, enabling you to create complex types by combining simpler ones.

interface  A {
    a: string;

}
interface B {
    b: number;
}

interface C extends A, B {
    c: boolean;
}

const d: C = {
    a: "hello",
    b: 42,
    c: true
};

console.log(typeof d); // Output: object
