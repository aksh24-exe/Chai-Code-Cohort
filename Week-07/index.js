// Lexical Scoping and Closures

// Lexical Scoping => It is a convention of determines how variable are accessible in a block of code
// It is also Known as static scoping
// it determined when the code is created not when its run
let fname = "Akshat";
// let fname = 'Akshat';
// Cannot [redeclare] block-scoped variable 'fname'
function sayName() {
  //sayName function ka Lexical Scope ma fName hai
  let lname = "sharma";
  function inner() {
    // inner function ka Lexical Scope ma fName and lName dono hai
    console.log("Inside sayName value of fname and lName is", fname, lname);
    return;
  }
  inner();
}

console.log("Value of fname is", fname);
sayName();

// Global Memory Context
// Two Parts -> Memory Phase, Code Phase
// First Memory Phase run in which all variable and function are define and inital value of varible is undefine.
// in code phase variable value assigned
// All function have own function execution context in which two part memory phase and code phase
// function execution context => in memory phase variable and function define and inital value of variable is undefine.
//function execution context =>  in code phase value are given to variable.
// after function execution complete the it delete the function excecution part
// all the function execution are push in call stack
// in all function there is some [[scope]] => which have some reference of her parent
