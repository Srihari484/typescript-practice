//data_types
let username: string = "JohnDoe";

let age: number = 30;

let isactive: boolean = true;

let empty: null = null;

let notassigned: undefined = undefined;

let fruits: string[] = ["apple", "banana", "cherry"];

let numbers: number[] = [1, 2, 3, 4, 5];

//tuples
let mixed: (string | number)[] = ["apple", 1, "banana", 2];

//special_types
let anyType: any = "I can be anything";

let unknownType: unknown = 42;

let neverType: never;

console.log(username,age,isactive,empty,notassigned);
console.log(fruits, numbers, mixed);