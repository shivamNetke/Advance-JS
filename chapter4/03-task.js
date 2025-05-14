// Write a program that:
// Takes two numbers (a and b).
// Prints:
// The rounded average of a and b.
// The square root of the product of a and b.
// The maximum and minimum of both.
// A random number between a and b (rounded to the nearest integer).
// The absulute difference between a and b.

let a = 10.4;
let b = 20.6;

console.log("a = ", a, " b = ", b);
console.log("Rounded of ", a, " is : ", Math.round(a));
console.log("Rounded of ", b, " is : ", Math.round(b));
console.log("Square root of product of ", a, " and ", b, " is : ", Math.sqrt(a * b));
console.log("The maximum of ", a, " and ", b, " is : ", Math.max(a, b));
console.log("The minimum of ", a, " and ", b, " is : ", Math.min(a, b));

// Generate a random number between a and b, rounded
let randomBetween = Math.random() * (b - a) + a;
console.log("The random number between ", a, " and ", b, " is : ", randomBetween);

// Absolute difference
console.log("The absolute difference between ", a, " and ", b, " is : ", Math.abs(a - b));
