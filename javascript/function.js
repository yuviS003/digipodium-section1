function add(a, b) {
  var c = a + b;
  return c;
}

console.log(add(3, 4));

const fact = (number) => {
  let factorial = 1;
  for (let index = 1; index <= number; index++) {
    factorial *= index;
  }
  return factorial;
};

console.log(fact(5));

const avg = (a, b, c) => {
  return (a + b + c) / 3;
};

console.log(avg(3, 6, 9));
