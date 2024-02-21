const num = [34, 89, 284, 275, 39, 53, 92];

let sum = 0;

num.map((element) => {
  sum += element;
});

console.log("sum", sum);

// ----------x-----------x-----------

sum = 0;

num.map((element, index) => {
  if (index % 2 == 0) sum += element;
});

console.log("sum of even index", sum);

