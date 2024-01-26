/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function
function addTwoNumbers(a, b) {
    return a + b;
}
let sum = addTwoNumbers(3, 7);
console.log(sum);

// Arrow Function With Parameters
const multiplyTwoNumbers = (a, b) => {
    return a * b;
};
console.log(multiplyTwoNumbers(4, 5));
// Single Line Arrow Function With Parameters
const subtractTwoNumbers = (a, b) => a - b;

console.log(subtractTwoNumbers(19, 8));
// Implicit Returns
const saySomething = message => console.log(message);
saySomething('Hello');
// Returning Multiple Lines
const multipleLines = () => (
    `<p>
        This is a multiline string!
    </p>`
)
console.log(multipleLines());