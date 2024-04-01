// Tests for equality and inequality with strings
const string1: string = "hello";
const string2: string = "world";

console.log("Equality test with strings:");
console.log(string1 === string2); // False
console.log("Inequality test with strings:");
console.log(string1 !== string2); // True


// Tests using the lower case function
const uppercaseString: string = "HELLO";
const lowercaseString: string = "hello";

console.log("Lowercase test:");
console.log(uppercaseString.toLowerCase() === lowercaseString);// True

// Numerical tests
const num1: number = 10;
const num2: number = 5;

console.log("Equality test with numbers:");
console.log(num1 === num2); // False - numbers are not equal
console.log("Inequality test with numbers:");
console.log(num1 !== num2); // True - number are equal
console.log("Greater than test:");
console.log(num1 > num2); // True - num1 is greter than num2
console.log("Less than test:");
console.log(num1 < num2); // False - num1 is  less than num2
console.log("Greater than or equal to test:");
console.log(num1 >= num2); // True - num1 is greater than or equal to num2
console.log("Less than or equal to test:");
console.log(num1 <= num2); // False - num1 is not less than or equal to num2

// Tests using "and" and "or" operators
const condition1: boolean = true;
const condition2: boolean = false;

console.log("And operator test:");
console.log(condition1 && condition2); // False - both condition are not true
console.log("Or operator test:");
console.log(condition1 || condition2); // True - at least one condition is true

// Test whether an item is in an array
const array: number[] = [1, 2, 3, 4, 5];
const itemToCheck: number = 3;

// console.log("Item in array test:");
console.log(array.includes(itemToCheck)); // True -3 is in the arry

// Test whether an item is not in an array
const itemNotInArray: number = 6;

console.log("Item not in array test:");
console.log(!array.includes(itemNotInArray)); // True