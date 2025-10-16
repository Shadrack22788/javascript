// a
//const fruits = ["Banana", "mango", "orange", "grape"];
//fruits.push("Kiwi");

//console.log(fruits);

// b

//const fruitNames = ["Banana", "mango", "orange", "grape"];
//fruitNames.pop();

//console.log(fruitNames);

// c

//const foodLists = ["Banana", "mango", "orange", "grape"];
//foodLists.unshift("")


//1. Add fruits with push()
let fruits = [];
fruits.push("apple", "banana", "orange");
console.log(fruits); 

//2. Remove last element with pop()
let colors = ["red", "blue", "green", "yellow"];
colors.pop();
console.log(colors); 

//3. Remove first element with shift()
let numbers = [10, 20, 30, 40];
numbers.shift();
console.log(numbers); 

//4. Add elements at the beginning with unshift()

let animals = ["dog", "cat"];
animals.unshift("lion", "tiger");
console.log(animals); 

//5. Remove "Charlie" with splice()
let students = ["Alice", "Bob", "Charlie", "David"];
students.splice(2, 1); 
console.log(students);

//6. Insert "Eve" between "Bob" and "Charlie"
students = ["Alice", "Bob", "Charlie", "David"];
students.splice(2, 0, "Eve");
console.log(students); 

//7. Create subarray with slice()
let letters = ["a", "b", "c", "d", "e"];
let subLetters = letters.slice(1, 4);
console.log(subLetters); 

//8. Find array length
let scores = [50, 60, 70, 80, 90];
console.log(scores.length); 

//9. Multiple operations
let items = ["pen", "pencil", "eraser"];
items.push("sharpener");     
items.shift();               
items.unshift("marker");    
console.log(items); 

//10. Playlist operations
let playlist = ["song1", "song2", "song3", "song4", "song5"];
playlist.splice(2, 1);          
playlist.push("song6", "song7"); 
let firstThree = playlist.slice(0, 3);
console.log(playlist);  
console.log(firstThree); 



