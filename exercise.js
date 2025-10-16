/*// step 1.

var x = (10);

console.log(x);

// step 2.

var a = (5);
var b = (8);

// sum

console.log(a + b);

// step 3.

var total = (20 - 7);

// total

console.log(total);

// step 4.

var num1 = (4);
var num2 = (3);

// result
console.log(num1 * num2);

// step 5








// Q 12

var base = 10;

var height = 6;

var area = (0.5 * base * height);

console.log(area);

// Q 13

var score = 80;

var Add = 20;

var Total = (score + Add);

console.log(Total);



// exercise on 5 august 2025

// Q1

let country = "Angola";

console.log(country);


// Q2

let length = 8;

let Width = 10;

area = length * Width;

console.log(area);

// Q3
const PI = 22 / 7;

console.log(PI);*/



// Exercise
//Q1

/*let first = "Lion";
let second = "King"
let combine = first + " " + second;
console.log(combine);

// 25 august 2025 exercise
for(let t = 0; t < 4; t++){
    console.log("Good morning");
}*/

// Question 1

function reverseString(str) {
  return str.split('').reverse().join('');
}
console.log(reverseString('hello'));

// Question 2

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}
console.log(capitalize('javascript'));

// Question 3

function repeatString(str, n) {
  return str.repeat(n);
}
console.log(repeatString('hi', 3));

// Question 4

function countVowels(str) {
  const vowels = str.match(/[aeiou]/gi);
  return vowels ? vowels.length : 0;
}
console.log(countVowels('banana'));



// Question 5

function removeSpaces(str) {
  return str.replace(/\s+/g, '');
}
console.log(removeSpaces('I am learning JS'));

// Question 6

function isPalindrome(str) {
  const reversed = str.split('').reverse().join('');
  return str === reversed;
}
console.log(isPalindrome('madam'));

// Question 7

function getInitials(name) {
  return name.split(' ').map(word => word[0].toUpperCase()).join('.') + '.';
}
console.log(getInitials('John Doe'));
// Question 8

function longestWord(sentence) {
  const words = sentence.split(' ');
  return words.reduce((a, b) => (a.length > b.length ? a : b));
}
console.log(longestWord('I love coding challenges'));

// Question 9
function evenOrOdd(num) {
  return num % 2 === 0 ? 'Even' : 'Odd';
}
console.log(evenOrOdd(5));

// Question 10

function largest(a, b, c) {
  return Math.max(a, b, c);
}
console.log(largest(5, 2, 9));

// Question 11

function compareStrings(str1, str2) {
  return str1.toLowerCase() === str2.toLowerCase();
}
console.log(compareStrings('Hello', 'hello'));
// Question 12

function sumToN(n) {
  return (n * (n + 1)) / 2;
}
console.log(sumToN(5));

// Question 13

function getGrade(score) {
  if (score >= 90) return 'A';
  else if (score >= 80) return 'B';
  else if (score >= 70) return 'C';
  else return 'F';
}
console.log(getGrade(85));

// Question 14
function smallestNumber(arr) {
  return Math.min(...arr);
}
console.log(smallestNumber([3, 1, 4, 2]));

// Question 15
function evenNumbers(arr) {
  return arr.filter(num => num % 2 === 0);
}
console.log(evenNumbers([1, 2, 3, 4, 5, 6]));

// Question 16
function sumArray(arr) {
  return arr.reduce((a, b) => a + b, 0);
}
console.log(sumArray([2, 5, 8]));

// Question 17

function countOccurrences(arr, value) {
  return arr.filter(item => item === value).length;
}
console.log(countOccurrences([1, 2, 2, 3, 2], 2));

// Question 18

function fullName(person) {
  return `${person.firstName} ${person.lastName}`;
}
console.log(fullName({ firstName: 'John', lastName: 'Doe' }));

// Question 19

function oldestPerson(people) {
  return people.reduce((oldest, person) => 
    person.age > oldest.age ? person : oldest
  ).name;
}
console.log(oldestPerson([{ name: 'A', age: 20 }, { name: 'B', age: 25 }]));

// Question 20

function addIsActive(obj) {
  if (!obj.hasOwnProperty('isActive')) {
    obj.isActive = true;
  }
  return obj;
}
console.log(addIsActive({ name: 'Alice' })); 
