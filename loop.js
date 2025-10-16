// Q1 for loop exercises
// print the number from 1 to 15
for (let i = 1; i <= 15; i++) {
    console.log(i);
}

//Q2

// Multiplication table of 7 *1 up to 7*12
for (let i = 1; i <= 12; i++) {
    console.log(`7 * ${i} = ${7 * i}`);
}

//3
//print the odd numbers

for (let i = 1; i <= 30; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}

//4
// print numbers from 20 down to 1

for (let i = 20; i >= 1; i--) {
    console.log(i);
}

//5
// Print and find SUM

let sum = 0;
let N = 100;

for (let i = 1; i <= N; i++) {
    sum += i;
}

console.log("Sum:", sum);

//6

for (let i = 1; i <= 5; i++) {
    console.log("I love coding");
}
//7

for (let i = 1; i <= 10; i++) {
    console.log(i * i);
}

//8

for (let i = 1; i <= 50; i++) {
    if (i % 5 === 0) {
        console.log(i);
    }
}

//Q 9

for (let i = 1; i <= 10; i++) {
    console.log(`${3} * ${i} = ${3 * i}`);
}

//Q10

let factorial = 1;

for (let i = 1; i <= 5; i++) {
    factorial *= i;
}

console.log(`5! = ${factorial}`);





// While loop exercises


// 1. Print numbers from 1 to 10
let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}

// 2. Print even numbers between 2 and 20
let even = 2;
while (even <= 20) {
    console.log(even);
    even += 2;
}

// Q 5
let t = 50;
while (t >= 1) {
    console.log(t);
    t--;
}
// Q 8ssss
let count = 1;
while (count <= 10) {
    console.log(4 * count);
    count++;
}
// Q 9
let sum2 = 0;
let n = 1;
while (n <= 20) {
    sum2 += n;
    n++;
}
console.log("Total sum2 from 1 to 20 is: " + sum2);


