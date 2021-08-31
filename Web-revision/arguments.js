// function f(x, y) {
//   console.log(arguments);

//arguments is a array like object
//pre define
//   return x + y;
// }

// f(2, 3, 5);

// Question1: write a program that take n number of argument and return the sum
function f() {
  let sum = 0;
  for (let x in arguments) {
    sum += arguments[x];
  }
  return sum;
}

console.log(f(1, 2, 8, 1, 2, 10));
