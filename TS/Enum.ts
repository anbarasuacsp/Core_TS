// Enum Definition Simple - An Enum is a way to define a set of named constants. It can be used to represent a collection of related values that can be either numeric or string-based.
enum Direction {
    Up,
    Down,
    Left,
    Right
}
enum Results{
    Success ,
    Failure,
    Pending 
}

enum week{
    Monday = "Monday",      
    Tuesday = "Tuesday",
    Wednesday = "Wednesday",
    Thursday = "Thursday",
    Friday = "Friday",
    Saturday = "Saturday",
    Sunday = "Sunday"
}

// Enum type
let dir: Direction = Direction.Up;
console.log(dir); // Output: 0      
let result: Results = Results.Failure;
console.log(result);

// Enum with String Values
let today: week = week.Monday;
console.log(today); // Output: Monday

// Enum with Custom Numeric Values
enum Status {
    Active = 1,
    Inactive = 0,   
    Pending = -1
}
// Enum with Heterogeneous Values
enum Mixed {
    Yes = "YES",
    No = 0
}   
// Enum with Computed Values
enum Computed {
    A = 1,
    B = A * 2,
    C = B + 3
}
// Enum with Constant Members
enum Constants {
    Pi = 3.14,
    E = 2.71
}
// Enum with Ambient Declaration
declare enum Ambient {
    Alpha,

    Beta,

    Gamma
}   

// Enum with Const Enum
const enum ConstEnum {
    X = 10,
    Y = 20,
    Z = 30
}
// Enum with Reverse Mapping
enum Reverse {
    First,  
    Second,
    Third}




