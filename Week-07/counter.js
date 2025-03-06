/*
 * I should have a fn increment()
 * on call of the function it should increment the number
 * and return the current counter
 * console.log( inremement()) 1
 * console.log( inremement()) 2
 * console.log( inremement()) 3
 * console.log( inremement()) 4
 * console.log( inremement()) 5
 */

// let count = 0;
// function increment(){
//     return count = count + 1;
// }
// console.log(increment());
// console.log(increment());
// console.log(increment());
// console.log(increment());
// console.log(increment());

// function increment() {
//   let count = 0;
//   return function () {
//     count++;
//     return count;
//   };
// }

// const X = increment();
// console.log(X());
// console.log(X());
// console.log(X());

function increment() {
  let count = 0;
  // Closure Function (Function binded by its lexical scope)
  function inner() {
    count++;
    return count;
  }

  return inner;
}

const f = increment();
console.log(f());
console.log(f());
console.log(f());
