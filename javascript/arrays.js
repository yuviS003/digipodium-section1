const fruits = ["apples", "cherry", "mango", "papaya", "banana"];

console.log(typeof fruits);

console.log(fruits.length);

console.log(fruits[2]); // also works with strings
console.log(fruits.at(-2));
console.log(fruits.indexOf("cherry"));

// slicing
console.log(fruits.slice(1, 4)); // also works with strings
console.log(fruits.slice(1));
console.log(fruits.slice(-2));
console.log(fruits.slice(4, 50));

// adding new elements
fruits.push("grapes");
fruits.unshift("kivi");
console.log(fruits);

// removing elements
fruits.pop();
console.log(fruits);
fruits.shift();
console.log(fruits);

// adding and removing elements from array
console.log("before splicing", fruits);
fruits.splice(2, 0, "orange");
console.log(fruits);
