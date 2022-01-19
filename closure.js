//create a counter to count how many function call
function func1() {
  let counter = 0;
  function func2() {
    counter++;
    return counter;
  }
  return func2;
}
const number = func1();
console.log(number());
console.log(number());
console.log(number());
console.log(number());

const number2 = func1();
console.log(number2());
console.log(number2());
console.log(number2());
console.log(
  "closure function count how many time called withoud access to local variables or losing data"
);
