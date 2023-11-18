// Destructuring is a way to unpack arrays, and objects and assigning to a distinct variable.

const numbers = [1, 2, 3]
let [numOne, numTwo, numThree] = numbers

console.log(numOne, numTwo, numThree)


// 1 2 3

const rectangle = {
    width: 20,
    height: 10,
    area: 200
  }
let { width, height, area, perimeter } = rectangle

console.log(width, height, area, perimeter)

// Spread or Rest Operator
// When we destructure an array we use the spread operator(...) to get the rest elements as array.
//  In addition to that we use spread operator to spread array elements to another array.


const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let [num1, num2, num3, ...rest] = nums
​
console.log(num1, num2, num3)
console.log(rest)



// 1 2 3
// [4, 5, 6, 7, 8, 9, 10]

const evens = [0, 2, 4, 6, 8, 10]
const evenNumbers = [...evens]

console.log(evenNumbers)

const user = {
    name:'ramu',
    title:'Programmer',
    country:'India',
    city:'Hyderabad'
  }
  
  const copiedUser = {...user}
  console.log(copiedUser)



  const sumAllNums = (...args) => {
    let sum = 0
    for (const num of args){
      sum += num
    }
    return sum
    
  }
  
  console.log(sumAllNums(1, 2, 3, 4, 5))





