// ======================================================
// 1. VARIABLES
// ======================================================

// let → variable whose value can be changed
let username1: string = "JohnDoe";

// const → variable whose value cannot be reassigned
const country: string = "India";

// var → older way of declaring variables (avoid using it in modern TS)
var age1: number = 25;


// ======================================================
// 2. BASIC DATA TYPES
// ======================================================

// String → text
let firstName: string = "John";

// Number → integers and decimals
let marks: number = 95;

// Boolean → true or false
let isStudent: boolean = true;

// Any → can contain any type
// Avoid using 'any' unless necessary
let randomValue: any = "Hello";
randomValue = 100;

// Undefined
let result: undefined = undefined;

// Null
let emptyValue: null = null;


// ======================================================
// 3. ARRAYS
// ======================================================

// Array of strings
let fruits1: string[] = ["Apple", "Mango", "Orange"];

// Array of numbers
let numbers4: number[] = [10, 20, 30, 40];

// Another way to write an array
let names1: Array<string> = ["John", "David", "Sam"];


// ======================================================
// 4. TUPLES
// ======================================================

// Tuple → fixed number of elements with specific types
let person: [string, number] = ["John", 25];

// First value must be string
// Second value must be number


// ======================================================
// 5. OBJECTS
// ======================================================

// Basic object with specified property types
let student: {
    name: string;
    age: number;
    isStudent: boolean;
} = {
    name: "John",
    age: 20,
    isStudent: true
};

console.log(student.isStudent);


// ======================================================
// 6. TYPE ALIAS
// ======================================================

// type → creates our own custom type
type User = {
    name: string;
    age: number;
    email: string;
};

// Now we can use User as a type
let user1: User = {
    name: "John",
    age: 25,
    email: "john@gmail.com"
};


// ======================================================
// 7. UNION TYPES
// ======================================================

// A variable can contain more than one type
let id: string | number;

id = "ABC123";
id = 123;

// Both are allowed


// ======================================================
// 8. LITERAL TYPES
// ======================================================

// Only these exact values are allowed
let direction: "left" | "right" | "up" | "down";

direction = "left";
// direction = "forward"; // ERROR


// ======================================================
// 9. FUNCTIONS
// ======================================================

// Function that doesn't return anything
function greet(): void {
    console.log("Hello!");
}

greet();


// Function with parameters
function add(a: number, b: number): number {
    return a + b;
}

let sum: number = add(10, 20);

console.log(sum);


// ======================================================
// 10. OPTIONAL PARAMETERS
// ======================================================

// ? means the parameter is optional
function greetUser(name?: string): void {

    if (name) {
        console.log("Hello " + name);
    } else {
        console.log("Hello!");
    }
}

greetUser();
greetUser("John");


// ======================================================
// 11. DEFAULT PARAMETERS
// ======================================================

// If no value is provided, "Guest" is used
function welcome(name: string = "Guest"): void {
    console.log("Welcome " + name);
}

welcome();
welcome("John");


// ======================================================
// 12. ARROW FUNCTIONS
// ======================================================

// Normal function
function multiply(a: number, b: number): number {
    return a * b;
}

// Arrow function
const multiplyArrow = (a: number, b: number): number => {
    return a * b;
};

console.log(multiplyArrow(5, 4));


// Short arrow function
const square = (num: number): number => num * num;

console.log(square(5));


// ======================================================
// 13. INTERFACES
// ======================================================

// interface → describes the structure of an object
interface Product {
    name: string;
    price: number;
    inStock: boolean;
}

let product1: Product = {
    name: "Laptop",
    price: 50000,
    inStock: true
};


// ======================================================
// 14. OPTIONAL PROPERTIES
// ======================================================

interface Employee {
    name: string;
    age: number;
    phone?: string; // optional
}

let employee1: Employee = {
    name: "John",
    age: 25
};


// ======================================================
// 15. READONLY
// ======================================================

interface Car {
    readonly brand: string;
    model: string;
}

let car1: Car = {
    brand: "Toyota",
    model: "Camry"
};

// car1.brand = "BMW"; // ERROR
// readonly properties cannot be changed


// ======================================================
// 16. TYPE ALIAS WITH UNION
// ======================================================

type Status = "success" | "error" | "loading";

let currentStatus: Status = "success";


// ======================================================
// 17. ENUM
// ======================================================

// enum → collection of named constants
enum Direction {
    Up,
    Down,
    Left,
    Right
}

let move: Direction = Direction.Up;

console.log(move);


// ======================================================
// 18. FOR LOOP
// ======================================================

for (let i: number = 0; i < 5; i++) {
    console.log(i);
}


// ======================================================
// 19. WHILE LOOP
// ======================================================

let count: number = 0;

while (count < 5) {
    console.log(count);
    count++;
}


// ======================================================
// 20. IF / ELSE
// ======================================================

let score: number = 85;

if (score >= 90) {
    console.log("Excellent");
} else if (score >= 50) {
    console.log("Pass");
} else {
    console.log("Fail");
}


// ======================================================
// 21. SWITCH
// ======================================================

let day: number = 2;

switch (day) {

    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    default:
        console.log("Invalid day");
}


// ======================================================
// 22. FOR...OF
// ======================================================

// Used to get VALUES from an array
let colors: string[] = ["Red", "Blue", "Green"];

for (const color of colors) {
    console.log(color);
}


// ======================================================
// 23. FOR...IN
// ======================================================

// Used to get KEYS / INDEXES
for (const index in colors) {
    console.log(index);
}


// ======================================================
// 24. ARRAY METHODS
// ======================================================

let nums: number[] = [1, 2, 3, 4, 5];

// map → creates a new array
let doubled = nums.map((num: number) => num * 2);

console.log(doubled);


// filter → keeps values that satisfy a condition
let evenNumbers = nums.filter((num: number) => num % 2 === 0);

console.log(evenNumbers);


// reduce → combines values into one value
let total = nums.reduce(
    (sum: number, num: number) => sum + num,
    0
);

console.log(total);


// ======================================================
// 25. CLASSES
// ======================================================

class Person {

    // Properties
    name: string;
    age: number;

    // Constructor
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    // Method
    introduce(): void {
        console.log(
            `My name is ${this.name} and I am ${this.age} years old.`
        );
    }
}

// Create an object
let person1 = new Person("John", 25);

person1.introduce();


// ======================================================
// 26. ACCESS MODIFIERS
// ======================================================

class BankAccount {

    // public → accessible anywhere
    public accountName: string;

    // private → accessible only inside this class
    private balance: number;

    // protected → accessible inside this class
    // and classes that inherit from it
    protected accountNumber: number;

    constructor(
        accountName: string,
        balance: number,
        accountNumber: number
    ) {
        this.accountName = accountName;
        this.balance = balance;
        this.accountNumber = accountNumber;
    }

    getBalance(): number {
        return this.balance;
    }
}

let account = new BankAccount("John", 5000, 12345);

console.log(account.accountName);
console.log(account.getBalance());


// ======================================================
// 27. INHERITANCE
// ======================================================

class Animal {

    name: string;

    constructor(name: string) {
        this.name = name;
    }

    makeSound(): void {
        console.log("Animal makes a sound");
    }
}


// Dog inherits from Animal
class Dog extends Animal {

    bark(): void {
        console.log("Woof!");
    }
}

let dog = new Dog("Tommy");

dog.makeSound();
dog.bark();


// ======================================================
// 28. GENERICS
// ======================================================

// Generic function → works with different types
function identity<T>(value: T): T {
    return value;
}

let stringResult = identity<string>("Hello");
let numberResult = identity<number>(100);

console.log(stringResult);
console.log(numberResult);


// ======================================================
// 29. GENERIC ARRAY
// ======================================================

function getFirst<T>(items: T[]): T {
    return items[0];
}

console.log(getFirst<number>([10, 20, 30]));
console.log(getFirst<string>(["Apple", "Mango"]));


// ======================================================
// 30. TYPE ASSERTION
// ======================================================

// Tells TypeScript what type we believe a value is
let someValue: unknown = "Hello TypeScript";

let stringValue = someValue as string;

console.log(stringValue.length);


// ======================================================
// 31. UNKNOWN
// ======================================================

// unknown is safer than any
let data: unknown = "Hello";

// We must check the type before using it
if (typeof data === "string") {
    console.log(data.toUpperCase());
}


// ======================================================
// 32. NEVER
// ======================================================

// never → function that never successfully finishes
function throwError(message: string): never {
    throw new Error(message);
}

// Don't call this unless you want an error!
// throwError("Something went wrong");


// ======================================================
// 33. TYPEOF
// ======================================================

let value: string | number = "Hello";

if (typeof value === "string") {
    console.log("Value is a string");
} else {
    console.log("Value is a number");
}


// ======================================================
// 34. NULL CHECKING
// ======================================================

let userName: string | null = null;

if (userName !== null) {
    console.log(userName);
} else {
    console.log("No username");
}


// ======================================================
// 35. OPTIONAL CHAINING
// ======================================================

interface Customer {
    name: string;
    address?: {
        city: string;
    };
}

let customer: Customer = {
    name: "John"
};

// ?. prevents an error if address doesn't exist
console.log(customer.address?.city);


// ======================================================
// 36. NULLISH COALESCING
// ======================================================

let userAge: number | null = null;

// If userAge is null/undefined, use 18
let finalAge = userAge ?? 18;

console.log(finalAge);


// ======================================================
// 37. TEMPLATE LITERALS
// ======================================================

let name1: string = "John";
let userAge2: number = 25;

// Backticks allow variables inside ${ }
let message: string = `My name is ${name1} and I am ${userAge2} years old.`;

console.log(message);


// ======================================================
// 38. DESTRUCTURING
// ======================================================

let studentInfo = {
    studentName: "John",
    studentAge: 20
};

// Extract properties into variables
const { studentName, studentAge } = studentInfo;

console.log(studentName);
console.log(studentAge);


// ======================================================
// 39. SPREAD OPERATOR
// ======================================================

let numbers1: number[] = [1, 2, 3];
let numbers2: number[] = [4, 5, 6];

// ... copies elements from the arrays
let allNumbers = [...numbers1, ...numbers2];

console.log(allNumbers);


// ======================================================
// 40. REST PARAMETERS
// ======================================================

// ...args allows any number of arguments
function addAll(...args: number[]): number {

    return args.reduce(
        (total: number, num: number) => total + num,
        0
    );
}

console.log(addAll(10, 20, 30, 40));


// ======================================================
// 41. IMPORT / EXPORT
// ======================================================

// Used when working with multiple TypeScript files

// Export:
// export const username = "John";

// Import:
// import { username } from "./anotherFile";


// ======================================================
// 42. COMMENTS
// ======================================================

// Single-line comment

/*
   Multi-line comment
   Can span multiple lines
*/


// ======================================================
// 43. TYPE INFERENCE
// ======================================================

// TypeScript automatically understands the type
let inferredName = "John";
// TypeScript knows this is a string

let inferredAge = 25;
// TypeScript knows this is a number

// inferredAge = "Hello"; // ERROR


// ======================================================
// 44. TYPE ANNOTATION
// ======================================================

// We explicitly tell TypeScript the type
let explicitName: string = "John";
let explicitAge: number = 25;


// ======================================================
// 45. CONSOLE OUTPUT
// ======================================================

console.log("Hello TypeScript!");

console.log("Username:", username);

console.log("Age:", age);


// ======================================================
// END
// ======================================================