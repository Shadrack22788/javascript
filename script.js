// Question 3

let color = "";
while (color.toLowerCase() !== "blue") {
    color = prompt("What is your favorite color?");
}
alert("Yes! Your favorite color is blue!");

// Question 4

let num = 0;
while (num <= 100) {
    num = parseInt(prompt("Enter a number greater than 100:"));
}
alert("Good! You entered " + num);

// Question  6

let password = "";
while (password !== "1234") {
    password = prompt("Enter password:");
}
alert("Access granted!");

// Q 7


let answer = "";
while (answer !== "yes") {
    answer = prompt("Type 'yes' to continue:");
}
alert("Finally!");

// Q 10
const secret = 8;
let guess = 0;

while (guess !== secret) {
    guess = perseInt(prompt("Guess the secret number (between 1 and 10):"));
}
alert("Correct!");