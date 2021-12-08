// global scope 
// program to print a text 
let a = "hello";

function greet () {
    // console.log(a);
}
greet(); // hello
console.log(a);
// function scope 
function run() {
    // "run" function scope
    let message = 'Run, Forrest, Run!';
    console.log(message); // 'Run, Forrest, Run!'
  }
  run();
  console.log(message); // throws ReferenceError

// block scope 
let x = 1;
{
  let x = 2;
  console.log(x); //logs 2
}
console.log(x); // logs 1

