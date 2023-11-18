// Declaration function
// Expression function
// Anonymous function
// Arrow function


//declaring a function without a parameter
function functionName() {
    // code goes here
  }
functionName() // calling function by its name and with parentheses

const anonymousFun = function() {
    console.log(
      'I am an anonymous function and my value is stored in anonymousFun'
    )
}


// Function expression
const square = function(n) {
    return n * n
  }
  
  console.log(square(2)) // -> 4


// This is how we write normal or declaration function
// Let us change this declaration function to an arrow function
function square(n) {
    return n * n
  }
  
  console.log(square(2)) // 4
  
  const square = n => {
    return n * n
  }
  
  console.log(square(2))  // -> 4
  




function square() {
    let num = 2
    let sq = num * num
    console.log(sq)
}

square() // 4


// if we have only one line in the code block, it can be written as follows, explicit return
const square = n => n * n  // -> 4