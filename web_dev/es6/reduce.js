let a = [1, 2, 3];

function sum(a, b) {
  return a + b;
}

let reducedValue = a.reduce(sum);

console.log(a);
console.log(reducedValue);